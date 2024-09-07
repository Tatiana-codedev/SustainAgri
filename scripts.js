// Função para carregar o arquivo JSON
async function loadNewsData() {
    try {
        const response = await fetch('news.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.news;
    } catch (error) {
        console.error('Failed to load news data:', error);
        return [];
    }
}

// Função de busca de notícias
async function searchNews() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('results');

    // Carrega os dados do JSON
    const newsData = await loadNewsData();

    // Filtra as notícias com base no texto de entrada
    const results = newsData.filter(news => 
        news.title.toLowerCase().includes(input) || 
        news.summary.toLowerCase().includes(input)
    );

    // Limpa os resultados anteriores
    resultsContainer.innerHTML = '';

    // Exibe os resultados encontrados
    if (input.trim() === '') {
        // Se não há input, esconda a caixa de resultados
        resultsContainer.classList.add('hidden');
    } else if (results.length > 0) {
        results.forEach(news => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <h3>${news.title}</h3>
                <p>${news.summary}</p>
                <a href="${news.link}" target="_blank">Leia mais</a>
            `;
            resultsContainer.appendChild(resultItem);
        });
        // Mostrar o container de resultados
        resultsContainer.classList.remove('hidden');
    } else {
        resultsContainer.innerHTML = '<p>Nenhuma notícia encontrada.</p>';
        // Mostrar o container de resultados
        resultsContainer.classList.remove('hidden');
    }
}

// Função para limpar os resultados e exibir apenas a caixa de pesquisa
function showHome() {
    const resultsContainer = document.getElementById('results');
    const searchInput = document.getElementById('searchInput');
    
    // Limpa o campo de pesquisa e os resultados
    searchInput.value = '';
    resultsContainer.innerHTML = '';
    // Esconder o container de resultados
    resultsContainer.classList.add('hidden');
}

// Função para abrir o LinkedIn em uma nova aba
function openLinkedIn() {
    window.open('https://www.linkedin.com/in/tatianabpinheiro/', '_blank');
}

// Função para abrir o GitHub em uma nova aba
function openGitHub() {
    window.open('https://github.com/Tatiana-codedev', '_blank');
}

// Adiciona os listeners de evento
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona o listener para o botão de busca
    document.getElementById('searchButton').addEventListener('click', searchNews);

    // Adiciona o listener para o link "Home"
    document.getElementById('homeLink').addEventListener('click', (e) => {
        e.preventDefault(); // Previne o comportamento padrão do link
        showHome(); // Executa a função para mostrar a caixa de pesquisa e limpar resultados
    });

    // Adiciona o listener para o link "LinkedIn"
    document.getElementById('linkedin').addEventListener('click', (e) => {
        e.preventDefault(); // Previne o comportamento padrão do link
        openLinkedIn(); // Abre o LinkedIn em uma nova aba
    });

    // Adiciona o listener para o link "GitHub"
    document.getElementById('github').addEventListener('click', (e) => {
        e.preventDefault(); // Previne o comportamento padrão do link
        openGitHub(); // Abre o GitHub em uma nova aba
    });

    // Adiciona o listener para o link "LinkedIn"
    document.getElementById('https://www.linkedin.com/in/tatianabpinheiro/').addEventListener('click', (e) => {
        e.preventDefault(); // Previne o comportamento padrão do link
        openLinkedIn(); // Abre o LinkedIn em uma nova aba
    });



});
