const news = [
  {
    title: "O Impacto da Agricultura Orgânica",
    summary:
      "Descubra como a agricultura orgânica pode beneficiar o meio ambiente e a saúde humana.",
    link: "https://www.exemplo.com/noticia1",
  },
  {
    title: "Práticas Sustentáveis na Agricultura",
    summary:
      "Explore métodos e técnicas que ajudam a manter a sustentabilidade nas práticas agrícolas.",
    link: "https://www.exemplo.com/noticia2",
  },
  {
    title: "Como Reduzir o Uso de Produtos Químicos",
    summary:
      "Aprenda a reduzir a dependência de produtos químicos na agricultura e adote alternativas seguras.",
    link: "https://www.exemplo.com/noticia3",
  },
  {
    title: "Benefícios da Agricultura de Conservação",
    summary:
      "Saiba como a agricultura de conservação pode ajudar a restaurar a saúde do solo e melhorar a produtividade.",
    link: "https://www.exemplo.com/noticia4",
  },
  {
    title: "Técnicas de Agricultura Regenerativa",
    summary:
      "Entenda como a agricultura regenerativa pode reverter danos ambientais e aumentar a biodiversidade.",
    link: "https://www.exemplo.com/noticia5",
  },
  {
    title: "Inovações em Agricultura Sustentável",
    summary:
      "Veja as últimas inovações e tecnologias que estão impulsionando a sustentabilidade na agricultura.",
    link: "https://www.exemplo.com/noticia6",
  },
  {
    title: "Como a Agricultura de Precisão Está Mudando o Setor",
    summary:
      "A tecnologia de precisão está transformando a maneira como os agricultores gerenciam suas colheitas.",
    link: "https://www.exemplo.com/noticia7",
  },
  {
    title: "O Papel das Leguminosas na Agricultura Sustentável",
    summary:
      "Leguminosas são essenciais para a rotação de culturas e a saúde do solo. Descubra por quê.",
    link: "https://www.exemplo.com/noticia8",
  },
  {
    title: "Agroecologia: Princípios e Práticas",
    summary:
      "Conheça os princípios da agroecologia e como aplicá-los na prática agrícola.",
    link: "https://www.exemplo.com/noticia9",
  },
  {
    title: "Como a Agricultura Vertical Pode Reduzir a Pegada de Carbono",
    summary:
      "Explore como o cultivo vertical pode ser uma solução para reduzir a pegada de carbono na agricultura.",
    link: "https://www.exemplo.com/noticia10",
  },
  {
    title: "O Impacto das Coberturas de Solo na Qualidade do Solo",
    summary:
      "Coberturas de solo ajudam a proteger e melhorar a qualidade do solo. Saiba mais sobre seus benefícios.",
    link: "https://www.exemplo.com/noticia11",
  },
  {
    title: "Sistemas Agroflorestais: O Que São e Como Funcionam",
    summary:
      "Os sistemas agroflorestais combinam árvores e cultivo para uma agricultura mais sustentável.",
    link: "https://www.exemplo.com/noticia12",
  },
  {
    title: "A Importância da Compostagem na Agricultura",
    summary:
      "A compostagem é uma técnica valiosa para melhorar a saúde do solo e reduzir resíduos.",
    link: "https://www.exemplo.com/noticia13",
  },
  {
    title: "Como as Culturas de Cobertura Ajudam a Prevenir a Erosão",
    summary:
      "Culturas de cobertura são fundamentais para prevenir a erosão e melhorar a qualidade do solo.",
    link: "https://www.exemplo.com/noticia14",
  },
  {
    title: "Os Benefícios das Práticas de Agricultura de Baixo Carbono",
    summary:
      "Adote práticas agrícolas de baixo carbono para reduzir o impacto ambiental.",
    link: "https://www.exemplo.com/noticia15",
  },
  {
    title: "O Papel dos Microrganismos na Agricultura Sustentável",
    summary:
      "Microrganismos desempenham um papel crucial na saúde do solo e no crescimento das plantas.",
    link: "https://www.exemplo.com/noticia16",
  },
  {
    title: "Cultivo de Plantas Resistentes à Seca",
    summary:
      "Plantas resistentes à seca são essenciais para enfrentar as mudanças climáticas.",
    link: "https://www.exemplo.com/noticia17",
  },
  {
    title: "Uso de Energia Renovável na Agricultura",
    summary:
      "A incorporação de energia renovável nas práticas agrícolas pode reduzir custos e impacto ambiental.",
    link: "https://www.exemplo.com/noticia18",
  },
  {
    title: "A Revolução das Algodoeiras Sustentáveis",
    summary:
      "Algodoeiras sustentáveis estão revolucionando a indústria do algodão com práticas mais ecológicas.",
    link: "https://www.exemplo.com/noticia19",
  },
  {
    title: "Como Melhorar a Fertilidade do Solo Naturalmente",
    summary:
      "Dicas e técnicas para melhorar a fertilidade do solo sem o uso de fertilizantes químicos.",
    link: "https://www.exemplo.com/noticia20",
  },
  {
    title: "Agricultura Sustentável em Áreas Urbanas",
    summary:
      "Explore como a agricultura sustentável pode ser aplicada em ambientes urbanos para promover a segurança alimentar.",
    link: "https://www.exemplo.com/noticia21",
  },
  {
    title: "O Impacto dos Polinizadores na Agricultura",
    summary:
      "Polinizadores são vitais para a produção de alimentos. Saiba como protegê-los e incentivá-los.",
    link: "https://www.exemplo.com/noticia22",
  },
  {
    title: "A Importância da Diversidade de Culturas",
    summary:
      "A diversidade de culturas é crucial para a resiliência e sustentabilidade agrícola.",
    link: "https://www.exemplo.com/noticia23",
  },
  {
    title:
      "Técnicas de Irrigação Eficientes para Reduzir o Desperdício de Água",
    summary:
      "Descubra técnicas de irrigação que ajudam a economizar água e melhorar a eficiência agrícola.",
    link: "https://www.exemplo.com/noticia24",
  },
  {
    title: "Como Implementar a Agricultura Sintrópica",
    summary:
      "A agricultura sintrópica busca criar sistemas agrícolas que se autossustentam e promovem a biodiversidade.",
    link: "https://www.exemplo.com/noticia25",
  },
  {
    title: "O Papel das Rotação de Culturas na Agricultura Sustentável",
    summary:
      "Rotacionar culturas ajuda a manter a saúde do solo e prevenir doenças.",
    link: "https://www.exemplo.com/noticia26",
  },
  {
    title: "Tecnologias Emergentes na Agricultura de Precisão",
    summary:
      "Novas tecnologias estão emergindo para ajudar na agricultura de precisão e promover a sustentabilidade.",
    link: "https://www.exemplo.com/noticia27",
  },
  {
    title: "Benefícios da Agricultura Semear",
    summary:
      "A técnica de semear pode ajudar a melhorar a qualidade do solo e a produtividade das culturas.",
    link: "https://www.exemplo.com/noticia28",
  },
  {
    title: "Como Usar Adubos Orgânicos Eficientemente",
    summary:
      "Adubos orgânicos são uma excelente alternativa aos fertilizantes químicos. Descubra como usá-los de forma eficaz.",
    link: "https://www.exemplo.com/noticia29",
  },
  {
    title: "A Integração de Animais na Agricultura Sustentável",
    summary:
      "Integrar animais na prática agrícola pode beneficiar o solo e aumentar a produtividade.",
    link: "https://www.exemplo.com/noticia30",
  },
  {
    title: "A Evolução das Práticas de Agricultura Conservacionista",
    summary:
      "Explore como as práticas conservacionistas estão evoluindo para promover uma agricultura mais sustentável.",
    link: "https://www.exemplo.com/noticia31",
  },
  {
    title: "Como Utilizar Restos de Colheitas para Melhorar o Solo",
    summary:
      "Restos de colheitas podem ser utilizados para melhorar a saúde do solo e promover a sustentabilidade.",
    link: "https://www.exemplo.com/noticia32",
  },
  {
    title: "Estratégias para Reduzir o Desperdício de Alimentos na Agricultura",
    summary:
      "Reduzir o desperdício de alimentos é crucial para a sustentabilidade. Descubra estratégias eficazes.",
    link: "https://www.exemplo.com/noticia33",
  },
  {
    title: "A Importância das Árvores em Sistemas Agroflorestais",
    summary:
      "Árvores desempenham um papel crucial em sistemas agroflorestais, promovendo a biodiversidade e a saúde do solo.",
    link: "https://www.exemplo.com/noticia34",
  },
  {
    title: "O Futuro da Agricultura Sustentável: Tendências e Projeções",
    summary:
      "Descubra as tendências emergentes e as projeções para o futuro da agricultura sustentável.",
    link: "https://www.exemplo.com/noticia35",
  },
  {
    title: "Como Implementar Práticas de Agricultura Sintrópica em Sua Fazenda",
    summary:
      "Passos para aplicar a agricultura sintrópica e promover um ecossistema agrícola mais saudável e produtivo.",
    link: "https://www.exemplo.com/noticia36",
  },
  {
    title: "A Revolução da Agricultura Digital",
    summary:
      "A tecnologia digital está revolucionando a agricultura, trazendo inovação e eficiência.",
    link: "https://www.exemplo.com/noticia37",
  },
  {
    title: "Cultivo de Vegetais em Ambientes Urbanos",
    summary:
      "Explore técnicas de cultivo de vegetais em ambientes urbanos e os benefícios dessa prática para a sustentabilidade.",
    link: "https://www.exemplo.com/noticia38",
  },
  {
    title: "O Impacto da Agricultura de Baixo Impacto Ambiental",
    summary:
      "A agricultura de baixo impacto ambiental é uma abordagem importante para reduzir a pegada ecológica.",
    link: "https://www.exemplo.com/noticia39",
  },
  {
    title: "Como Usar Fertilizantes Naturais para Melhorar a Produtividade",
    summary:
      "Fertilizantes naturais podem ser usados para aumentar a produtividade e melhorar a qualidade do solo.",
    link: "https://www.exemplo.com/noticia40",
  },
  {
    title: "A Importância da Polinização na Agricultura",
    summary:
      "A polinização é vital para a produção de alimentos. Descubra como proteger e apoiar os polinizadores.",
    link: "https://www.exemplo.com/noticia41",
  },
  {
    title: "Como Combinar Agricultura e Conservação Ambiental",
    summary:
      "Combinar práticas agrícolas com conservação ambiental pode promover um equilíbrio sustentável.",
    link: "https://www.exemplo.com/noticia42",
  },
  {
    title: "Técnicas de Agricultura para Reduzir a Pegada de Carbono",
    summary:
      "Adote técnicas de agricultura que ajudam a reduzir a pegada de carbono e promovem a sustentabilidade.",
    link: "https://www.exemplo.com/noticia43",
  },
  {
    title: "Soluções para a Gestão Sustentável da Água na Agricultura",
    summary:
      "A gestão sustentável da água é essencial para a agricultura. Conheça as soluções para otimizar o uso da água.",
    link: "https://www.exemplo.com/noticia44",
  },
  {
    title:
      "Como a Agricultura de Baixo Custo Pode Beneficiar Pequenos Produtores",
    summary:
      "Práticas de agricultura de baixo custo podem ser extremamente benéficas para pequenos produtores rurais.",
    link: "https://www.exemplo.com/noticia45",
  },
  {
    title: "Benefícios da Integração de Pecuária e Cultivo",
    summary:
      "A integração entre pecuária e cultivo pode trazer benefícios econômicos e ambientais significativos.",
    link: "https://www.exemplo.com/noticia46",
  },
  {
    title: "A Utilização de Resíduos Orgânicos na Agricultura",
    summary:
      "Resíduos orgânicos podem ser reciclados para melhorar a fertilidade do solo e promover a sustentabilidade.",
    link: "https://www.exemplo.com/noticia47",
  },
  {
    title: "O Impacto das Mudanças Climáticas na Agricultura",
    summary:
      "Como as mudanças climáticas estão afetando a agricultura e o que pode ser feito para mitigar os efeitos.",
    link: "https://www.exemplo.com/noticia48",
  },
  {
    title: "Tecnologias Inovadoras em Agricultura de Precisão",
    summary:
      "Explore as tecnologias inovadoras que estão transformando a agricultura de precisão e promovendo a eficiência.",
    link: "https://www.exemplo.com/noticia49",
  },
  {
    title: "Desenvolvimento Sustentável em Cultivos de Grãos",
    summary:
      "Práticas sustentáveis no cultivo de grãos podem promover a saúde do solo e melhorar a produtividade.",
    link: "https://www.exemplo.com/noticia50",
  },
];
