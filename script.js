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