// 1. MENU MOBILE
const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('.nav-links');

if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icone = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icone.classList.remove('fa-bars');
            icone.classList.add('fa-xmark');
        } else {
            icone.classList.remove('fa-xmark');
            icone.classList.add('fa-bars');
        }
    });
}

// 2. LÓGICA DA CLASSIFICAÇÃO E ENERGIA
const btnNavClassificar = document.getElementById('btn-nav-classificar');
const linkInicio = document.getElementById('nav-inicio');
const areaHero = document.getElementById('hero-area');
const areaClassification = document.getElementById('classification-area');
const areaResults = document.getElementById('results-area');
const btnStartClassify = document.getElementById('btn-start-classify');
const btnRecycleItem = document.getElementById('btn-recycle-item');
const spanEnergyValue = document.getElementById('energy-value');
const energyBar = document.getElementById('energy-bar');
const spanDetectedItem = document.getElementById('detected-item');
const spanItemType = document.getElementById('item-type');
const spanEnergyYield = document.getElementById('energy-yield');

// Elementos novos para o Upload de Imagem
const fileInput = document.getElementById('image-upload');
const imgPreview = document.getElementById('image-preview');

let totalEnergiaAcumulada = 0;
let energiaDesteItem = 0;
const MAX_ENERGIA_BARRA = 20; // 20 kWh enche a barra toda no nosso teste

function atualizarBarraEnergia() {
    spanEnergyValue.innerText = totalEnergiaAcumulada.toFixed(1);
    let porcentagem = (totalEnergiaAcumulada / MAX_ENERGIA_BARRA) * 100;
    if (porcentagem > 100) porcentagem = 100;
    energyBar.style.width = `${porcentagem}%`;
}

// Simula a IA detectando a latinha
function simularApiClassificacao() {
    spanDetectedItem.innerText = "Lata de Refrigerante";
    spanItemType.innerText = "Alumínio";
    energiaDesteItem = 5.5; // Valor do rendimento
    spanEnergyYield.innerText = energiaDesteItem;
    btnRecycleItem.style.display = 'flex'; // Mostra o botão
}

// Troca de "Páginas"
if(btnNavClassificar) {
    btnNavClassificar.addEventListener('click', (e) => {
        e.preventDefault();
        areaHero.classList.add('hidden');
        areaClassification.classList.remove('hidden');
    });
}

if(linkInicio) {
    linkInicio.addEventListener('click', (e) => {
        e.preventDefault();
        areaHero.classList.remove('hidden');
        areaClassification.classList.add('hidden');
    });
}

// ----------------------------------------------------
// NOVO: LÓGICA DE UPLOAD E PREVIEW DE IMAGEM
// ----------------------------------------------------

// Clicar no botão aciona o input escondido
if(btnStartClassify) {
    btnStartClassify.addEventListener('click', () => {
        fileInput.click(); 
    });
}

// Quando o arquivo é escolhido
if(fileInput) {
    fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0]; 
        
        if (file) {
            spanDetectedItem.innerText = "Analisando imagem com IA...";
            spanItemType.innerText = "...";
            spanEnergyYield.innerText = "0";
            areaResults.classList.remove('hidden');
            btnRecycleItem.style.display = 'none'; // Esconde botão até a IA responder

            // Ler a imagem e colocar na tela
            const reader = new FileReader();
            reader.onload = function(e) {
                if(imgPreview) {
                    imgPreview.src = e.target.result;
                    imgPreview.style.display = 'block'; 
                }
            }
            reader.readAsDataURL(file);

            // Simula o tempo de rede
            setTimeout(() => {
                simularApiClassificacao();
            }, 2000); 
        }
    });
}

// ----------------------------------------------------

// Clicar em Reciclar
if(btnRecycleItem) {
    btnRecycleItem.addEventListener('click', () => {
        totalEnergiaAcumulada += energiaDesteItem;
        atualizarBarraEnergia();
        areaResults.classList.add('hidden'); // Some com o resultado
        
        // Limpa a imagem para o próximo uso
        if(fileInput) fileInput.value = ""; 
        if(imgPreview) imgPreview.style.display = 'none'; 
    });
}