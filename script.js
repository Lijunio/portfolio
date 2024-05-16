 // Define o limite de largura da tela para inicializar o Blip Chat
    var minWidthForChatbot = 768;

    // Verifica se a largura da janela é maior que o limite definido
    if (window.innerWidth > minWidthForChatbot) {
        // Inicializa o Blip Chat apenas se a largura da tela for maior que o limite
        (function () {
            new BlipChat()
            .withAppKey('cG9ydGlmb2xpbzg6NjRlYmI3NTYtMTc5Yy00MmIwLWFmZjQtYzM4NGQ3NTFkNzNm')
            .withButton({"color":"#333","icon":"https://blipmediastore.blip.ai/public-medias/Media_a4a37081-2224-47b6-94cf-5aff5fa9cfd2"})
            .withCustomCommonUrl('https://elias-junio-bqqie.chat.blip.ai/')
            .build();
        })();
    }

    function updateProgress(barId, textId, percentage) {
        var bar = document.getElementById(barId);
        var text = document.getElementById(textId);
        bar.style.width = percentage + '%';
        if (percentage >= 100) {
            bar.parentElement.classList.add('completed');
            text.textContent = 'Concluído';
        } else {
            text.textContent = percentage + '%';
        }
    }

    // Atualiza as barras de progresso com as porcentagens desejadas
    updateProgress('progress-1', 'progress-text-1', 100);
    updateProgress('progress-2', 'progress-text-2', 40);