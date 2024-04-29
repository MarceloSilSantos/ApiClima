 // Template URL da API OpenWeatherMap
    var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q={CIDADE}&appid={API_KEY}&lang=pt_br';

    // Função para trazer os dados da API
    function carregarDados() {
        var cidade = 'Guarulhos'; // Definir cidade
        var apiKey = '777fd6c175f16899b669ab9b22be7638'; // Substitua por sua própria chave de API

        // Substituir {CIDADE} e {API_KEY} pelos valores apropriados na URL da API
        var url = apiUrl.replace('{CIDADE}', cidade).replace('{API_KEY}', apiKey);

        // Fazer solicitação AJAX para a API
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var dados = JSON.parse(this.responseText);
                exibirDados(dados);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }

    // Função para exibir os dados na página HTML
    function exibirDados(dados) {
        var weatherDiv = document.getElementById("weather-info");
        var temperatura = (dados.main.temp - 273.15).toFixed(1); // Convertendo temperatura de Kelvin para Celsius

        // Construindo a string HTML para exibir os dados
        var html = "<p>Cidade: " + dados.name + "</p>" +
                   "<p>Temperatura: " + temperatura + "°C</p>" +
                   "<p>Condição: " + dados.weather[0].description + "</p>";
                   

        // Exibindo os dados na div weather-info
        weatherDiv.innerHTML = html;
    }

    // Carregar os dados da API quando a página for carregada
    window.onload = function() {
        carregarDados();
    };