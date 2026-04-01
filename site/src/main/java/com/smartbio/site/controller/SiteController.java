package com.smartbio.site.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class SiteController {

    // Página inicial (formulário)
    @GetMapping("/")
    public String index() {
        return "index";
    }

    // Recebe o título e envia para a página resposta
    @PostMapping("/resposta")
    public String resposta(@RequestParam String titulo, Model model) {
        model.addAttribute("titulo", titulo);
        return "resposta";
    }
}   