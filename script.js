// tela para inicializar o Blip
var minWidthForChatbot = 768;

if (window.innerWidth > minWidthForChatbot) {
    (function () {
        window.onload = function () {
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

            var chatButton = document.getElementById('blip-chat-open-iframe');
            chatButton.style.display = 'block'; 

            setTimeout(function () {
                chatButton.classList.add('blip-chat-visible');
            }, 5000); 

            chatButton.addEventListener('click', function () {
                chatButton.classList.add('blip-chat-clicked');
            });

            //13 linhas
            var cardTexts = document.querySelectorAll('.card-text');
            cardTexts.forEach(function (text) {
                var lineHeight = parseInt(window.getComputedStyle(text).lineHeight);
                var maxLines = 15;
                if (text.scrollHeight > lineHeight * maxLines) {
                    text.nextElementSibling.style.display = 'block';
                }
            });
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

// pequena
updateProgress('progress-1', 'progress-text-1', 100);
updateProgress('progress-2', 'progress-text-2', 100);
updateProgress('progress-3', 'progress-text-3', 100);
updateProgress('progress-4', 'progress-text-4', 40);

// grande
updateProgress('progress-1-large', 'progress-text-1-large', 100);
updateProgress('progress-2-large', 'progress-text-2-large', 100);
updateProgress('progress-3-large', 'progress-text-3-large', 100);
updateProgress('progress-4-large', 'progress-text-4-large', 40);

window.toggleText = function (button) {
    const cardText = button.previousElementSibling;
    if (cardText.classList.contains('expanded')) {
        cardText.classList.remove('expanded');
        button.textContent = 'Continuar lendo';
    } else {
        cardText.classList.add('expanded');
        button.textContent = 'Mostrar menos';
    }
};
