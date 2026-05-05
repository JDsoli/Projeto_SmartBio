package com.smartbio.site.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import dev.langchain4j.model.chat.ChatModel;
import jakarta.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;

@Controller
public class ChatController {

    private final ChatModel chatModel;

    public ChatController(ChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @GetMapping("/chat")
    public String chatBot() {
        return "chatBot";
    }

    @CrossOrigin(origins = "*") // libera acesso externo
    @PostMapping("/mensagem")
    @ResponseBody 
    public String chat(@RequestParam("mensagem") String mensagem, HttpSession session) {
        
        try {
            List<String> historico = (List<String>) session.getAttribute("chat");
            if(historico == null) {
            historico = new ArrayList<>();
            }
            historico.add("Usuário: " + mensagem);
            String contexto = String.join("\n", historico);
            
            String resposta = chatModel.chat(
                "Responda em português, respondendo de forma coesa a mensagem a seguir: " + mensagem + "\nContexto: " + contexto
            );
            historico.add("IA: " + resposta);

            session.setAttribute("chat", historico);
            return resposta;

        } catch (Exception e) {
            e.printStackTrace();
            return "Erro na IA: " + e.getMessage();
        }
    }
}