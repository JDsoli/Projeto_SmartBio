# Projeto SmartBio

---

## Definição do Problema e Personas "IA-Augmented"

O manejo de biodigestores é sensível; pequenas variações na mistura de resíduos podem interromper a produção de biogás ou danificar as colônias de bactérias. A oportunidade para IA aqui é a Predição de Eficiência e Otimização de Mistura.

Onde a IA gera valor:

Predição (Análise de Dados): Com base no histórico de resíduos inseridos, a IA prediz a quantidade estimada de biogás que será gerada antes mesmo de o produtor iniciar o processo.

Automação (Suporte à Decisão): Um serviço de IA que recomenda automaticamente a proporção ideal (ex: "adicione mais 15% de resíduo carbonáceo para equilibrar o pH") baseado nos dados de entrada.

A Solução

O SmartBio é uma plataforma digital que oferece consultas técnicas sobre resíduos, recomendações automatizadas de proporção e dashboards de monitoramento para maximizar a geração de energia e reduzir o desperdício em propriedades rurais.

## Personas

José, Produtor Rural (Otimizado pela IA): Recebe previsões de lucro/geração de energia, reduzindo o medo de errar na mistura.

Operador de Biodigestor: Precisa de informações rápidas sobre propriedades de resíduos para o dia a dia da operação.

Analista de Dados/Biotecnólogo: Utiliza a IA para identificar padrões de queda de rendimento sazonais e ajustar as recomendações da plataforma.

## Jornada de Usuários

Consulta de Eficiência: O produtor pesquisa um novo resíduo agrícola no sistema, verifica o nível de eficiência para biogás e recebe um alerta se o material for ácido demais.

Ajuste de Produção: O técnico recebe uma recomendação automática de proporção (ex: 70% esterco / 30% palha) para equilibrar o processo e evitar a morte das bactérias do biodigestor

## Backlog do Produto (Priorizado)

Durante o desenvolvimento do SmartBio, as LLMs (ChatGPT/Gemini) não foram usadas apenas como "autores", mas como parceiros de refinamento:

Brainstorming de Atributos: Uso da IA para identificar quais parâmetros biológicos (C/N, pH, temperatura) eram críticos para o banco de dados de um biodigestor.

Geração de Casos de Teste: Solicitação à IA para criar dados fictícios de resíduos (ex: casca de laranja vs. esterco bovino) para testar a lógica de classificação.

Refatoração de Código Java: Tradução de lógica de negócio complexa para métodos limpos no backend.

### Histórias de Usuário

1. Como um operador do biodigestor, eu gostaria de consultar no site informações sobre diferentes tipos de resíduos orgânicos, para entender suas propriedades e nível de eficiência na produção de biogás.

2. Como um produtor rural, gostaria de saber quais os melhores resíduos para colocar no biodigestor, para conseguir máxima eficiência no que estou buscando.

3. Como produtora rural, eu gostaria de pesquisar diferentes tipos de resíduos agrícolas e animais em um sistema simples, para descobrir quais podem gerar biogás e melhorar o aproveitamento dos recursos da fazenda.
   
4. Como uma produtora rural, eu gostaria de verificar quais resíduos agrícolas e animais podem ser usados no biodigestor para produzir energia e reduzir o desperdício na propriedade.
   
5. Como gestora de uma propriedade rural, eu gostaria de consultar em uma plataforma digital quais resíduos orgânicos produzidos na fazenda podem ser utilizados na produção de biogás, para identificar oportunidades de transformar esses resíduos em energia e reduzir desperdícios.
   
6. José não é especialista em química ou biologia, por isso, ele tem medo de colocar o resíduo errado, como por exemplo: excesso de palha ou até mesmo material ácido, podendo até mesmo matar as bactérias do biodigestor, o que lhe causaria muitos problemas.

7. Ela acessa o dashboard via Web para analisar o histórico de classificação de resíduos e entender o porquê a produção de gás caiu em determinada semanas, usando os alertas de suporte à decisão para orientar os fazendeiros 

8. Como um técnico agrícola, eu gostaria de receber recomendações automáticas no sistema sobre a proporção ideal de resíduos a serem inseridos no biodigestor, para garantir o equilíbrio do processo e maximizar a produção de biogás.

9. Como um operador iniciante de biodigestor, eu gostaria de visualizar alertas e avisos no sistema quando um resíduo inadequado for selecionado, para evitar erros que possam comprometer o funcionamento e a eficiência do biodigestor.


### Link do figma
[Figma](https://www.figma.com/design/3QcQxHQlRTlwh2wgBwX7v5/Untitled?node-id=10-3&t=gbu9VXnAMuAt9yC7-1)
---



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