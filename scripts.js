// Função de busca de notícias
async function searchNews() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsContainer = document.getElementById("results");

  // Filtra as notícias com base no texto de entrada
  const results = news.filter(
    (_news) =>
      _news.title.toLowerCase().includes(input) ||
      _news.summary.toLowerCase().includes(input)
  );

  // Limpa os resultados anteriores
  resultsContainer.innerHTML = "";

  // Exibe os resultados encontrados
  if (input.trim() === "") {
    // Se não há input, esconda a caixa de resultados
    resultsContainer.classList.add("hidden");
  } else if (results.length > 0) {
    results.forEach((news) => {
      const resultItem = document.createElement("div");
      resultItem.className = "result-item";
      resultItem.innerHTML = `
                  <h3>${news.title}</h3>
                  <p>${news.summary}</p>
                  <a href="${news.link}" target="_blank">Leia mais</a>
              `;
      resultsContainer.appendChild(resultItem);
    });

    // Mostrar o container de resultados
    resultsContainer.classList.remove("hidden");
  } else {
    resultsContainer.innerHTML = "<p>Nenhuma notícia encontrada.</p>";
    // Mostrar o container de resultados
    resultsContainer.classList.remove("hidden");
  }
}

// Adiciona o listener para o botão de busca
document.getElementById("searchButton").addEventListener("click", searchNews);
