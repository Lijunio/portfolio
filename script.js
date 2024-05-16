document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.show-description').forEach(function(element) {
        element.addEventListener('click', function() {
            var description = this.previousElementSibling;
            if (description.classList.contains('d-none')) {
                description.classList.remove('d-none');
                this.textContent = 'Ocultar Descrição';
            } else {
                description.classList.add('d-none');
                this.textContent = 'Descrição do Projeto';
            }
        });
    });
});

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