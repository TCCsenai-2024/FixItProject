document.querySelector('form').addEventListener('submit', function(event) {
    const submitButton = document.getElementById('submitButton');
    const buttonText = submitButton.querySelector('.button-text');
    const loadingSpinner = submitButton.querySelector('.loading-spinner');

    // Alterar o texto do botão para o spinner
    buttonText.style.display = 'none'; // Oculta o texto do botão
    loadingSpinner.style.display = 'inline-block'; // Exibe o spinner

    // Desabilitar o botão para evitar múltiplos envios
    submitButton.disabled = true;

    // O formulário continuará a ser enviado normalmente após essas alterações
});