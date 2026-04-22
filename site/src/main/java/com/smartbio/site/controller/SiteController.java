package com.smartbio.site.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import dev.langchain4j.model.chat.ChatModel;

@Controller
public class SiteController {

    private final ChatModel chatModel;

    public SiteController(ChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @PostMapping("/resposta")
    public String resposta(@RequestParam String titulo, Model model) {

        String respostaIA;

        try {
            respostaIA = chatModel.chat(
                "Responda em português, com no máximo 100 palavras.\n" +
                "Formato obrigatório:\n" +
                "Classificação: (bom, médio ou ruim)\n" +
                "Biogás: (baixo, médio ou alto)\n" +
                "Explicação: breve justificativa.\n\n" +
                "Resíduo: " + titulo
            );

        } catch (Exception e) {
            e.printStackTrace();

            respostaIA = "Erro ao gerar resposta da IA: " + e.getMessage();
        }

        model.addAttribute("titulo", titulo);
        model.addAttribute("resultadoIA", respostaIA);

        return "resposta";
    }
}