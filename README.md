# Projeto SmartBio

---

## Entrega 1 — 01/03/2026

O Problema

Produtores rurais enfrentam baixa eficiência na produção de biogás e riscos de danos aos biodigestores por não possuírem conhecimento técnico sobre a composição e proporção ideal dos resíduos orgânicos utilizados.

A Solução

O SmartBio é uma plataforma digital que oferece consultas técnicas sobre resíduos, recomendações automatizadas de proporção e dashboards de monitoramento para maximizar a geração de energia e reduzir o desperdício em propriedades rurais.

## Personas

José, o Produtor Rural: Não é especialista em química/biologia e tem receio de comprometer a vida útil do biodigestor com materiais inadequados.

Operador de Biodigestor: Precisa de informações rápidas sobre propriedades de resíduos para o dia a dia da operação.

Gestor/Biotecnólogo: Analisa o histórico de produção e usa alertas de suporte à decisão para otimizar os resultados da fazenda.

## Jornada de Usuários

Consulta de Eficiência: O produtor pesquisa um novo resíduo agrícola no sistema, verifica o nível de eficiência para biogás e recebe um alerta se o material for ácido demais.

Ajuste de Produção: O técnico recebe uma recomendação automática de proporção (ex: 70% esterco / 30% palha) para equilibrar o processo e evitar a morte das bactérias do biodigestor

## Backlog do Produto (Priorizado)

Interface de Cadastro/Login: Acesso seguro do usuário.

Sistema de Classificação de Resíduos: Core da aplicação (História 2).

Dashboard de Visualização: Status e eficiência (Histórias 4 e 5).

Sistema de Alertas e Suporte: Segurança e orientações (Histórias 3 e 9).

Histórico de Consultas: Registro de atividades anteriores

### Histórias de Usuário

1. Como um operador do biodigestor, eu gostaria de consultar no site informações sobre diferentes tipos de resíduos orgânicos, para entender suas propriedades e nível de eficiência na produção de biogás.

2. Como um produtor rural, gostaria de saber quais os melhores resíduos para colocar no biodigestor, para conseguir máxima eficiência no que estou buscando.

3. Como produtora rural, eu gostaria de pesquisar diferentes tipos de resíduos agrícolas e animais em um sistema simples, para descobrir quais podem gerar biogás e melhorar o aproveitamento dos recursos da fazenda.
   
4. Como uma produtora rural, eu gostaria de verificar quais resíduos agrícolas e animais podem ser usados no biodigestor para produzir energia e reduzir o desperdício na propriedade.
   
5. Como gestora de uma propriedade rural, eu gostaria de consultar em uma plataforma digital quais resíduos orgânicos produzidos na fazenda podem ser utilizados na produção de biogás, para identificar oportunidades de transformar esses resíduos em energia e reduzir desperdícios.
   
6. José não é especialista em química ou biologia, por isso, ele tem medo de colocar o resíduo errado, como por exemplo: excesso de palha ou até mesmo material ácido, podendo até mesmo matar as bactérias do biodigestor, o que lhe causaria muitos problemas.

7. Ela acessa o dashboard via Web para analisar o histórico de classificação de resíduos e entender o porquê a produção de gás caiu em determinada semanas, usando os alertas de suporte à decisão para orientar os fazendeiros 

### Link do figma
[Figma](https://www.figma.com/design/3QcQxHQlRTlwh2wgBwX7v5/Untitled?node-id=10-3&t=gbu9VXnAMuAt9yC7-1)
---

## Entrega 2 — 06/04/2026

### Histórias de Usuário

8. Como um técnico agrícola, eu gostaria de receber recomendações automáticas no sistema sobre a proporção ideal de resíduos a serem inseridos no biodigestor, para garantir o equilíbrio do processo e maximizar a produção de biogás.

9. Como um operador iniciante de biodigestor, eu gostaria de visualizar alertas e avisos no sistema quando um resíduo inadequado for selecionado, para evitar erros que possam comprometer o funcionamento e a eficiência do biodigestor.

### Link do video
[Video](https://www.youtube.com/watch?v=pxV4aqGPmeE)
---
## Especificação Técnica

Linguagens: HTML5, CSS3, JavaScript e Java.

Prototipação: Figma (conforme link no repositório).

Versionamento: Git/GitHub.

## Lógica de Funcionamento

Entrada: O usuário interage com a interface (HTML/CSS) enviando uma requisição de consulta.

Processamento: O backend (Java) recebe o ID do resíduo, busca os parâmetros técnicos no banco de dados e calcula a recomendação de eficiência.

Saída: O JavaScript injeta dinamicamente o resultado no dashboard, alterando cores e indicadores conforme o nível de risco e produtividade detectado.