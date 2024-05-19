// Define o limite de largura da tela para inicializar o Blip Chat
var minWidthForChatbot = 768;

// Verifica se a largura da janela é maior que o limite definido
if (window.innerWidth > minWidthForChatbot) {
    (function () {
        window.onload = function () {
            setTimeout(function () {
                var blipClient = new BlipChat();
                blipClient.withAppKey('cG9ydGlmb2xpbzg6NjRlYmI3NTYtMTc5Yy00MmIwLWFmZjQtYzM4NGQ3NTFkNzNm')
                    .withEventHandler(BlipChat.LOAD_EVENT, function () {
                        blipClient.sendMessage({
                            "type": "text/plain",
                            "content": "Olá"
                        });
                    })
                    .withButton({"color":"#333","icon":"https://blipmediastore.blip.ai/public-medias/Media_a4a37081-2224-47b6-94cf-5aff5fa9cfd2"})
                    .withCustomCommonUrl('https://elias-junio-bqqie.chat.blip.ai/')
                    .build();

                // Mostra o chatbot com animação após 5 segundos
                var chatButton = document.getElementById('blip-chat-open-iframe');
                chatButton.classList.add('blip-chat-visible');

                // Adiciona a classe 'blip-chat-clicked' ao botão quando o botão é clicado
                chatButton.addEventListener('click', function () {
                    chatButton.classList.add('blip-chat-clicked');
                });
            }, 5000); // 5000ms = 5 segundos
        };
    })();
}

function updateProgress(barId, textId, percentage) {
    var bar = document.getElementById(barId);
    var text = document.getElementById(textId);
    bar.style.width = percentage + '%';
    if (percentage >= 100) {
        bar.parentElement.classList.add('completed');
        text.textContent = '100% Concluído';
    } else {
        text.textContent = percentage + '% Concluído';
    }
}

// Atualiza as barras de progresso com as porcentagens desejadas
updateProgress('progress-1', 'progress-text-1', 100);
updateProgress('progress-2', 'progress-text-2', 40);
