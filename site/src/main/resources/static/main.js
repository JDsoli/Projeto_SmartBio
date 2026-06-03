document.addEventListener('DOMContentLoaded', () => {

    // --- SELEÇÃO DE ELEMENTOS GERAIS ---
    const resultsArea = document.getElementById('results-area');
    const usageResult = document.getElementById('usage-result');
    const fileInput = document.getElementById('image-upload');
    const imgPreview = document.getElementById('image-preview');
    
    const spanItem = document.getElementById('detected-item');
    const spanYield = document.getElementById('energy-yield');
    const iaText = document.getElementById('ia-text');
    const calcText = document.getElementById('calculation-text');

    const barFill = document.getElementById('energy-bar-fill');
    const accValText = document.getElementById('accumulated-val');

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    // --- SELEÇÃO DE ELEMENTOS DA NOVA BARRA DE CHAT ---
    const btnAttachFile = document.getElementById('btn-attach-file');
    const userPrompt = document.getElementById('user-prompt');
    const btnSendPrompt = document.getElementById('btn-send-prompt');
    const attachmentPreview = document.getElementById('attachment-preview');
    const attachmentName = document.getElementById('attachment-name');
    const btnRemoveAttachment = document.getElementById('btn-remove-attachment');
    
    // Novas variáveis do balão de pergunta
    const userQuestionDisplay = document.getElementById('user-question-display');
    const userQuestionText = document.getElementById('user-question-text');

    let currentFile = null;

    // --- LÓGICA DO MENU MOBILE ---
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            const icon = mobileMenuBtn ? mobileMenuBtn.querySelector('i') : null;
            if (icon) icon.className = 'fas fa-bars';
        });
    });

    // --- VARIÁVEIS DE ESTADO DA ENERGIA (ATUALIZADO COM LOCALSTORAGE) ---
    let energiaProduzida = 0;
    const META_ENERGIA = 50;
    
    // Busca a energia salva no navegador ou começa do 0
    let energiaTotalAcumulada = parseFloat(localStorage.getItem('smartbio_energia_acumulada')) || 0;

    // Preenche a barra ao carregar a página se já houver energia salva
    if (barFill && accValText) {
        const porcentagemAtual = Math.min((energiaTotalAcumulada / META_ENERGIA) * 100, 100);
        barFill.style.width = porcentagemAtual + "%";
        accValText.innerText = energiaTotalAcumulada.toFixed(2);
    }

    // --- LÓGICA DA BARRA DE CHAT (SIMULADOR) ---
    if (btnAttachFile && fileInput) {
        btnAttachFile.addEventListener('click', () => fileInput.click());
    }

    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            currentFile = e.target.files[0];
            if (currentFile && attachmentPreview && attachmentName) {
                attachmentName.innerHTML = `<i class="fas fa-image"></i> ${currentFile.name}`;
                attachmentPreview.classList.remove('hidden');
            }
        });
    }

    if (btnRemoveAttachment && fileInput) {
        btnRemoveAttachment.addEventListener('click', () => {
            currentFile = null;
            fileInput.value = ""; 
            if (attachmentPreview) attachmentPreview.classList.add('hidden');
        });
    }

    function sendPromptToJava() {
        if (!userPrompt || !iaText) return;

        const question = userPrompt.value.trim();
        
        if (!question && !currentFile) {
            alert("Por favor, escreva uma pergunta ou anexe uma imagem do resíduo.");
            return;
        }

        // Exibe a pergunta do usuário na tela (se ele tiver digitado algo)
        if (question && userQuestionDisplay && userQuestionText) {
            userQuestionText.innerText = question;
            userQuestionDisplay.classList.remove('hidden');
        } else if (userQuestionDisplay) {
            userQuestionDisplay.classList.add('hidden'); // Oculta se mandou só imagem
        }

        if(resultsArea) resultsArea.classList.remove('hidden');
        if(spanItem) spanItem.innerText = currentFile ? currentFile.name : "Análise por Texto";
        if(iaText) iaText.innerText = "A IA SmartBio está processando sua requisição...";
        
        if(imgPreview && currentFile) {
            const reader = new FileReader();
            reader.onload = (event) => {
                imgPreview.src = event.target.result;
                imgPreview.style.display = 'block';
            };
            reader.readAsDataURL(currentFile);
        } else if (imgPreview) {
            imgPreview.style.display = 'none'; 
        }

        const formData = new FormData();
        formData.append('pergunta', question); 
        if (currentFile) {
            formData.append('imagem', currentFile); 
        }

        userPrompt.value = ""; 
        if (attachmentPreview) attachmentPreview.classList.add('hidden');
        
        // --- ADIÇÃO: Salva se o usuário subiu arquivo ANTES de limpar a variável ---
        const isFileUpload = currentFile !== null;

        currentFile = null;
        if(fileInput) fileInput.value = "";

        fetch('http://localhost:8080/resposta', {
            method: 'POST',
            body: formData
        })
        .then(res => res.json()) // --- ADIÇÃO: Agora esperamos um JSON do Java ---
        .then(data => {
            // Atualiza o texto da IA pegando o atributo 'parecer'
            if(iaText) iaText.innerHTML = data.parecer; 

            // Se o usuário NÃO mandou foto, mas o Java encontrou uma imagem no Dataset
            if (!isFileUpload && data.imagemDataset && imgPreview) {
                imgPreview.src = data.imagemDataset; 
                imgPreview.style.display = 'block';
                if(spanItem) spanItem.innerText = "Resíduo Identificado no Dataset";
            }

            // Atualiza a energia gerada pegando do JSON
            energiaProduzida = data.energiaGerada || 3.62; 
            if(spanYield) spanYield.innerText = energiaProduzida;
        })
        .catch(err => {
            console.error(err);
            if(iaText) iaText.innerText = "IA Indisponível: O servidor Java não respondeu ou o JSON é inválido.";
        });
    }

    if (btnSendPrompt) {
        btnSendPrompt.addEventListener('click', sendPromptToJava);
    }
    
    if (userPrompt) {
        userPrompt.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendPromptToJava();
        });
    }

    // --- LÓGICA DE UTILIZAÇÃO DA ENERGIA GERADA ---
    const usageOption = document.getElementById('usage-option');
    if (usageOption) {
        usageOption.addEventListener('change', function(e) {
            const op = e.target.value;
            if(!op) { if(usageResult) usageResult.classList.add('hidden'); return; }
            if(usageResult) usageResult.classList.remove('hidden');

            if(op === 'carro') {
                if(calcText) calcText.innerText = `Com ${energiaProduzida} kWh, você conseguirá percorrer aproximadamente ${(energiaProduzida * 6.5).toFixed(1)} km.`;
            } else if (op === 'paes') {
                if(calcText) calcText.innerText = `Esta energia permite produzir cerca de ${(energiaProduzida * 20).toFixed(0)} pães na sua propriedade.`;
            } else {
                if(calcText) calcText.innerText = `Esta carga mantém o autoconsumo da sua casa por aproximadamente ${(energiaProduzida / 10).toFixed(1)} dias.`;
            }
        });
    }

    // --- CONFIRMAÇÃO DE ENERGIA (ATUALIZADO) ---
    const btnConfirmEnergy = document.getElementById('btn-confirm-energy');
    if (btnConfirmEnergy) {
        btnConfirmEnergy.addEventListener('click', () => {
            // Soma a energia e salva no LocalStorage
            energiaTotalAcumulada += parseFloat(energiaProduzida);
            localStorage.setItem('smartbio_energia_acumulada', energiaTotalAcumulada);
            
            // Atualiza visualmente
            const porcentagem = Math.min((energiaTotalAcumulada / META_ENERGIA) * 100, 100);
            if(barFill) barFill.style.width = porcentagem + "%";
            if(accValText) accValText.innerText = energiaTotalAcumulada.toFixed(2);

            alert(`Sucesso! Foram integrados ${energiaProduzida} kWh ao seu sistema.`);
            
            // Esconde os resultados para uma nova simulação (sem recarregar a página)
            if(resultsArea) resultsArea.classList.add('hidden');
            if(usageResult) usageResult.classList.add('hidden');
            if(usageOption) usageOption.value = "";
            energiaProduzida = 0;
        });
    }

    // --- CORREÇÃO DA IMAGEM (NÃO ESTICAR) ---
    if (imgPreview) {
        imgPreview.style.maxWidth = '400px'; 
        imgPreview.style.maxHeight = '300px'; 
        imgPreview.style.width = '100%';
        imgPreview.style.height = 'auto';
        imgPreview.style.objectFit = 'contain'; 
        imgPreview.style.margin = '20px auto'; 
        imgPreview.style.borderRadius = '15px';
    }

}); // Fim do DOMContentLoaded