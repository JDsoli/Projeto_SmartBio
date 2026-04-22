package com.smartbio.site.config;

import dev.langchain4j.model.chat.ChatModel;
import dev.langchain4j.model.openai.OpenAiChatModel;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ChatConfig {

    @Bean
    public ChatModel chatModel() {
        return OpenAiChatModel.builder()
                .apiKey("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")
                .modelName("gpt-4o-mini") // ou outro modelo
                .build();
    }
}