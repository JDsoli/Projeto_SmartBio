// 1. Referências dos Elementos (Verifique se esses IDs batem com seu HTML)
const fileInput = document.getElementById('image-upload');
const btnStartClassify = document.getElementById('btn-start-classify');
const areaResults = document.getElementById('results-area'); // A div que contém os resultados
const imgPreview = document.getElementById('image-preview'); // A tag <img> para o preview

// Textos de resultado
const spanDetectedItem = document.getElementById('detected-item');
const spanItemType = document.getElementById('item-type');
const spanEnergyYield = document.getElementById('energy-yield');
const btnRecycleItem = document.getElementById('btn-recycle-item');

// Barra de energia
const energyBar = document.getElementById('energy-bar');
const spanEnergyValue = document.getElementById('energy-value');

let totalEnergiaAcumulada = 0;
let energiaDesteItem = 0;
const MAX_ENERGIA_BARRA = 20;

// 2. Evento de Clique no Botão de Upload
if (btnStartClassify) {
    btnStartClassify.addEventListener('click', () => {
        fileInput.click();
    });
}

// 3. Evento de Mudança no Input de Arquivo (Quando você escolhe a foto)
if (fileInput) {
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];

        if (file) {
            // Mostra a área de resultados e limpa textos anteriores
            areaResults.classList.remove('hidden');
            spanDetectedItem.innerText = "Analisando imagem...";
            spanItemType.innerText = "...";
            spanEnergyYield.innerText = "0";
            
            // Esconde o botão de reciclar até a "IA" terminar
            if (btnRecycleItem) btnRecycleItem.style.display = 'none';

            // Lógica para ler e mostrar a imagem
            const reader = new FileReader();
            reader.onload = function(e) {
                if (imgPreview) {
                    imgPreview.src = e.target.result;
                    imgPreview.style.display = 'block'; // Garante que a imagem apareça
                }
            };
            reader.readAsDataURL(file);

            // Simula o tempo de resposta da IA (2 segundos)
            setTimeout(() => {
                spanDetectedItem.innerText = "Lata de Alumínio";
                spanItemType.innerText = "Reciclável";
                energiaDesteItem = 5.5; 
                spanEnergyYield.innerText = energiaDesteItem;
                
                // Mostra o botão de reciclar após a análise
                if (btnRecycleItem) btnRecycleItem.style.display = 'flex';
            }, 2000);
        }
    });
}

// 4. Lógica do Botão Reciclar (Encher a barra)
if (btnRecycleItem) {
    btnRecycleItem.addEventListener('click', () => {
        totalEnergiaAcumulada += energiaDesteItem;
        
        // Atualiza o texto do valor
        if (spanEnergyValue) spanEnergyValue.innerText = totalEnergiaAcumulada.toFixed(1);
        
        // Calcula a porcentagem da barra
        let porcentagem = (totalEnergiaAcumulada / MAX_ENERGIA_BARRA) * 100;
        if (porcentagem > 100) porcentagem = 100;
        
        // Aplica na barra
        if (energyBar) energyBar.style.width = porcentagem + "%";
        
        // Oculta os resultados e limpa o input para a próxima foto
        areaResults.classList.add('hidden');
        fileInput.value = ""; 
        alert("Sucesso! Você gerou " + energiaDesteItem + " kWh!");
    });
}