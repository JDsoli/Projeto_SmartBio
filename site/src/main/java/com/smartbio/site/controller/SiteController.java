package com.smartbio.site.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import dev.langchain4j.model.chat.ChatModel;

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

    @CrossOrigin(origins = "*") // LIBERA O ACESSO DO LIVE SERVER
    @PostMapping("/resposta")
    @ResponseBody 
    public String resposta(@RequestParam("titulo") String titulo) {
        try {
            return chatModel.chat(
                "Responda em português, com no máximo 100 palavras. " +
                "Explique por que o resíduo " + titulo + " é bom ou ruim para biodigestão " +
                "e qual o seu potencial energético aproximado."
            );
        } catch (Exception e) {
            e.printStackTrace();
            return "Erro na IA: " + e.getMessage();
        }
    }

}