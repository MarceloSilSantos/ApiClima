function fetchData() {

    const chave = '777fd6c175f16899b669ab9b22be7638';
    const cidade = 'São Paulo';
    // Fazer a requisição para a API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=${chave}&units=metric`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao carregar os dados da API');
        }
        return response.json();
      })
      .then(data => {
        // Manipular os dados recebidos aqui
        displayData(data);
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
  }
  
  // Função para exibir os dados na página HTML
  function displayData(data) {
    const apiDataElement = document.getElementById('api-data');
    apiDataElement.innerHTML = ''; // Limpa qualquer conteúdo anterior
    
    // Iterar sobre os dados e criar elementos HTML para exibição
    data.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.textContent = `${item.nome}: ${item.valor}`; // Adapte conforme a estrutura dos dados
      apiDataElement.appendChild(itemElement);
    });
  }
  
  // Chamar a função fetchData() para buscar os dados assim que a página carregar
  fetchData();