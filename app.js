function pesquisar(termoBusca) {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Verifica se o termo de busca está vazio
    if (!termoBusca || termoBusca.trim() === "") {
        section.innerHTML = "Nenhum resultado encontrado.";
        return; // Interrompe a função se o termo de busca estiver vazio
    }
  
    // Converter o termo de busca para minúsculas para comparação case-insensitive
    const termoMin = termoBusca.toLowerCase();
  
    // Filtrar os dados para encontrar correspondências
    const resultadosFiltrados = dados.filter(dado => {
        const tituloMin = dado.titulo.toLowerCase();
        const caracteristicasMin = dado.caracteristicasGerais.toLowerCase();
        const cuidadosMin = dado.cuidados.toLowerCase();
        const personalidadeMin = dado.personalidade.toLowerCase();
  
        // Verificar se o termo de busca está contido em qualquer um dos campos
        return tituloMin.includes(termoMin) ||
               caracteristicasMin.includes(termoMin) ||
               cuidadosMin.includes(termoMin) ||
               personalidadeMin.includes(termoMin);
    });
  
    // Verificar se foram encontrados resultados
    if (resultadosFiltrados.length === 0) {
        section.innerHTML = "Nenhum resultado encontrado.";
    } else {
        // Iterar sobre os resultados filtrados e criar o HTML
        for (let dado of resultadosFiltrados) {
            resultados += `
                <div class="item-resultado">
                    <div class="resultado-header">
                        <img src="${dado.imagem}" alt="${dado.titulo}" class="imagem-resultado">
                        <h2>
                            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                        </h2>
                    </div>
                    <p class="descricao-meta">${dado.caracteristicasGerais}</p>
                    <p class="descricao-meta">${dado.cuidados}</p>
                    <p class="descricao-meta">${dado.personalidade}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
  
        // Atribui os resultados gerados à seção HTML
        section.innerHTML = resultados;
    }
}
