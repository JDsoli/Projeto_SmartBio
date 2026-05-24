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

    @CrossOrigin(origins = "*") // Isso permite que o seu arquivo local fale com o Java
    @PostMapping("/mensagem")
    @ResponseBody
    public String chat(@RequestParam("mensagem") String mensagem, HttpSession session) {
        System.out.println("Mensagem recebida: " + mensagem); // LOG 1
        
        try {
            // ... sua lógica de histórico ...
            
            System.out.println("Chamando o modelo de IA..."); // LOG 2
            String resposta = chatModel.chat("Responda em português... " + mensagem);
            System.out.println("IA respondeu: " + resposta); // LOG 3

            return resposta;
        } catch (Exception e) {
            System.err.println("ERRO NA IA: " + e.getMessage());
            e.printStackTrace();
            return "Erro técnico: " + e.getMessage();
        }
    }
}