package com.smartbio.site.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.ResponseEntity;
import dev.langchain4j.model.chat.ChatModel;
import com.smartbio.site.model.RespostaSimulador;
import java.util.Random;

@Controller
public class SiteController {

    private final ChatModel chatModel;

    public SiteController(ChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/resposta")
    @ResponseBody 
    public ResponseEntity<RespostaSimulador> resposta(
            @RequestParam(value = "pergunta", required = false) String pergunta,
            @RequestParam(value = "imagem", required = false) MultipartFile imagem) {
        
        RespostaSimulador respostaDTO = new RespostaSimulador();
        Random rand = new Random();

        try {
            // 1. Chamada da Inteligência Artificial (LangChain4J)
            String prompt = "Responda em português, com no máximo 100 palavras. " +
                            "O usuário perguntou/falou: '" + pergunta + "'. " +
                            "Se ele pediu uma sugestão de resíduo, sugira apenas UM tipo (ex: restos de comida, casca de ovo, borra de café, saquinho de chá). " +
                            "Explique se é bom ou ruim para a biodigestão e dê o potencial energético aproximado em kWh.";
            
            String parecerIA = chatModel.chat(prompt);
            respostaDTO.setParecer(parecerIA);

            // 2. A Mágica do Dataset: Mapeamento dinâmico com o caminho absoluto do seu projeto
            String respostaMinuscula = parecerIA.toLowerCase();
            String termoBusca = (pergunta != null) ? pergunta.toLowerCase() : "";
            
            // Sorteia o número 1 ou 2 para alternar as imagens dinamicamente
            int numImg = rand.nextInt(2) + 1; 
            
            // CAMINHO BASE CORRIGIDO: Forçando a rota direta do servidor Spring Boot
            String caminhoBase = "http://localhost:8080/assets/dataset/";
            
            // Imagem padrão caso a IA não fale nenhuma palavra-chave mapeada
            String caminhoImagem = caminhoBase + "food_waste" + numImg + ".png";

            // Procura as palavras na resposta da IA ou na pergunta do usuário
            if (respostaMinuscula.contains("café") || respostaMinuscula.contains("borra") || termoBusca.contains("café")) {
                caminhoImagem = caminhoBase + "coffee_grounds" + numImg + ".png";
            } 
            else if (respostaMinuscula.contains("ovo") || respostaMinuscula.contains("casca") || termoBusca.contains("ovo")) {
                caminhoImagem = caminhoBase + "eggshells" + numImg + ".png";
            } 
            else if (respostaMinuscula.contains("chá") || respostaMinuscula.contains("saquinho") || termoBusca.contains("chá")) {
                caminhoImagem = caminhoBase + "tea_bags" + numImg + ".png";
            } 
            else if (respostaMinuscula.contains("plástico") || respostaMinuscula.contains("garrafa") || termoBusca.contains("plástico")) {
                caminhoImagem = caminhoBase + "plastic_water_bottles" + numImg + ".png";
            } 
            else if (respostaMinuscula.contains("comida") || respostaMinuscula.contains("resto") || respostaMinuscula.contains("orgânico") || termoBusca.contains("comida")) {
                caminhoImagem = caminhoBase + "food_waste" + numImg + ".png";
            }

            // 3. Se o usuário NÃO anexou arquivo no front, devolvemos a foto do dataset
            if (imagem == null || imagem.isEmpty()) {
                respostaDTO.setImagemDataset(caminhoImagem);
            }

            // 4. Cálculo da Energia (kWh)
            double energiaCalculada = 0.0;
            
            // Se for plástico (material não orgânico), a energia gerada é 0!
            if (!caminhoImagem.contains("plastic")) {
                energiaCalculada = 2.0 + (rand.nextDouble() * 4.0); // Gera entre 2 e 6 kWh
            }
            
            respostaDTO.setEnergiaGerada(Math.round(energiaCalculada * 100.0) / 100.0); 

            return ResponseEntity.ok(respostaDTO);

        } catch (Exception e) {
            e.printStackTrace();
            respostaDTO.setParecer("Erro no processamento da IA: " + e.getMessage());
            respostaDTO.setEnergiaGerada(0.0);
            return ResponseEntity.internalServerError().body(respostaDTO);
        }
    }
}