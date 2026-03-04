// Inicializa o mapa focado nas coordenadas de Manaus
        // Latitude: -3.1190, Longitude: -60.0217
        const map = L.map('map').setView([-3.1190, -60.0217], 12);

        // Adiciona a camada visual do OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Ícone customizado verde para o EletroLight
        const ecoIcon = L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        });

        // Adicionando Marcadores Fictícios baseados na justificativa do seu TCC
        
        // Marcador 1: Próximo ao Parque do Mindu (Exemplo prático do problema)
        L.marker([-3.0850, -60.0050], {icon: ecoIcon}).addTo(map)
            .bindPopup('<b>Ecoponto Mindu</b><br>Recebemos pilhas, baterias e portáteis.<br><em>Proteja nossos igarapés.</em>');

        // Marcador 2: Centro de Manaus
        L.marker([-3.1300, -60.0200], {icon: ecoIcon}).addTo(map)
            .bindPopup('<b>Centro de Descarte Circular</b><br>Aceitamos computadores e TVs antigas.');

        // Marcador 3: Zona Leste
        L.marker([-3.0700, -59.9500], {icon: ecoIcon}).addTo(map)
            .bindPopup('<b>Galpão de Logística Reversa</b><br>Descarte de grandes eletrodomésticos.');

            // --- Lógica do Chatbot ---
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotInputField = document.getElementById('chatbot-input-field');
const chatbotMessages = document.getElementById('chatbot-messages');

// Abrir e fechar a janela do chat
chatbotToggle.addEventListener('click', () => {
    chatbotWindow.classList.toggle('hidden');
});

chatbotClose.addEventListener('click', () => {
    chatbotWindow.classList.add('hidden');
});

// Função para enviar mensagem
function sendMessage() {
    const text = chatbotInputField.value.trim();
    if (text !== '') {
        // Cria o balão de mensagem do usuário
        const userMsg = document.createElement('div');
        userMsg.className = 'message user';
        userMsg.textContent = text;
        chatbotMessages.appendChild(userMsg);
        
        // Limpa a caixa de texto e rola para baixo
        chatbotInputField.value = '';
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;

        // Simula a IA "pensando" e respondendo após 1 segundo
        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.className = 'message bot';
            botMsg.textContent = 'Esta é uma versão de demonstração! No projeto final, eu poderei tirar dúvidas reais sobre reciclagem e pontos de coleta para você.';
            chatbotMessages.appendChild(botMsg);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }, 1000);
    }
}

// Enviar ao clicar no botão
chatbotSend.addEventListener('click', sendMessage);

// Enviar ao apertar "Enter" no teclado
chatbotInputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});