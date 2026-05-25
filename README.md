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

### Gerenciamento de Issues no GitHub [Entrega 4]
<img width="1420" height="447" alt="Captura de tela 2026-05-18 233854" src="https://github.com/user-attachments/assets/e13a730b-acab-4935-91bd-351e7119c074" />

### Histórias de Usuário

1. Como operador de biodigestor, eu gostaria de consultar em uma plataforma digital informações detalhadas sobre diferentes tipos de resíduos orgânicos, incluindo composição, potencial energético, restrições de uso e eficiência na geração de biogás, para tomar decisões mais seguras e eficientes sobre quais materiais utilizar no processo.

2. Como produtor rural, eu gostaria que o sistema me indicasse quais resíduos orgânicos são mais adequados para inserir no biodigestor com base nos resultados esperados, como maior produção de biogás, geração de biofertilizante ou estabilidade do sistema, para alcançar máxima eficiência na operação.

3. Como produtora rural, eu gostaria de pesquisar e analisar diferentes resíduos agrícolas e animais em um sistema simples e intuitivo, com informações sobre viabilidade de uso, rendimento energético e cuidados necessários, para descobrir quais materiais podem ser melhor aproveitados na geração de biogás e reduzir desperdícios na propriedade.

4. Como produtora rural, eu gostaria de verificar não apenas quais resíduos podem ser utilizados individualmente no biodigestor, mas também quais combinações entre eles são recomendadas ou inadequadas, para produzir energia de forma mais eficiente e evitar problemas operacionais causados por misturas incorretas.

5. Como gestora de uma propriedade rural, eu gostaria de consultar em uma plataforma digital todos os resíduos orgânicos gerados na fazenda e seu potencial para produção de biogás, com análises e recomendações de aproveitamento, para identificar oportunidades de transformar resíduos em energia, reduzir desperdícios e melhorar a sustentabilidade da propriedade.

6. Como usuário sem conhecimento técnico em química ou biologia, eu gostaria que o sistema me alertasse automaticamente quando eu selecionar resíduos inadequados ou em proporções que possam prejudicar o biodigestor, explicando os riscos envolvidos, para evitar danos às bactérias responsáveis pela digestão e prevenir falhas no processo.

7. Como gestora ou analista responsável pela operação, eu gostaria de acessar um dashboard web com histórico de classificação de resíduos, dados de produção de biogás e alertas de suporte à decisão, para investigar quedas de desempenho ao longo das semanas e orientar ações corretivas junto aos produtores.

8. Como técnico agrícola, eu gostaria de receber recomendações automáticas do sistema sobre a proporção ideal entre resíduos orgânicos a serem inseridos no biodigestor, considerando equilíbrio biológico e eficiência energética, para otimizar o processo e aumentar a produção de biogás com segurança.

9. Como operador iniciante de biodigestor, eu gostaria de visualizar alertas, avisos e orientações sempre que um resíduo inadequado for selecionado ou uma combinação representar risco ao sistema, para evitar erros operacionais e aprender boas práticas durante o uso da plataforma.

10. Como produtor rural, eu gostaria de comparar diferentes tipos de resíduos com base em critérios como potencial de geração de biogás, custo, disponibilidade e facilidade de manejo, para escolher as melhores opções para alimentar meu biodigestor de acordo com a realidade da propriedade.

11. Como usuário do sistema, eu gostaria de receber sugestões automáticas para corrigir misturas inadequadas ou desequilíbrios identificados no biodigestor, com recomendações práticas de ajuste, para recuperar rapidamente a eficiência do processo e evitar perdas na produção.

12. Como operador do biodigestor, eu gostaria de registrar e acompanhar resultados de testes realizados com diferentes resíduos e combinações ao longo do tempo, armazenando histórico de desempenho e produtividade, para identificar padrões e descobrir quais alternativas geram melhores resultados na minha operação.
13. Como pesquisador iniciante sobre biodigestores, eu gostaria de acessar uma plataforma com informações claras sobre diferentes resíduos orgânicos e sua viabilidade no processo de biodigestão, para entender melhor quais materiais possuem potencial para geração de biogás e ampliar meu conhecimento sobre o tema.
14. Como pessoa que acabou de conhecer a SmartBio, eu gostaria de visualizar no site informações sobre as parcerias da empresa e os resíduos analisados pela plataforma, para entender melhor sua atuação, credibilidade e como a solução contribui para o aproveitamento sustentável de resíduos orgânicos.

### Link do figma
[Figma](https://www.figma.com/design/3QcQxHQlRTlwh2wgBwX7v5/Untitled?node-id=10-3&t=gbu9VXnAMuAt9yC7-1)
---

### Link da documentação [entrega 4]
[Documentação do Projeto](https://docs.google.com/document/d/1Zkkc4iQzT8MpV5O2GFO1xpKwamlW0QLAH8rahbNo_H0/edit?usp=sharing)

### Link do video
[Video](https://www.youtube.com/watch?v=pxV4aqGPmeE)

### Link do video 2 [entrega 3]
[Video](https://youtu.be/aMJP5rgj2_o)

### Link do video 3 [entrega 4]
[Video](https://youtu.be/_F_3Upz_0Gk)

### Link do video 4
[Video](https://youtu.be/G2dnLGEny9M?si=GnMIYtAl5-F-O1Uh)


---

## Especificação Técnica

Linguagens: HTML5, CSS3, JavaScript e Java.

Prototipação: Figma (conforme link no repositório).

Versionamento: Git/GitHub.

## Lógica de Funcionamento

Entrada: O usuário interage com a interface (HTML/CSS) enviando uma requisição de consulta.

Processamento: O backend (Java) recebe o ID do resíduo, busca os parâmetros técnicos no banco de dados e calcula a recomendação de eficiência.

Saída: O JavaScript injeta dinamicamente o resultado no dashboard, alterando cores e indicadores conforme o nível de risco e produtividade detectado.
