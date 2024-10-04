// Adiciona um ouvinte de evento que aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona elementos do DOM
    const togglePassword = document.querySelector('.toggle-password'); // Botão para alternar a visibilidade da senha
    const passwordInput = document.querySelector('input[type="password"]'); // Campo de entrada para a senha
    const eyeIcon = document.querySelector('.eye'); // Ícone de olho (visível)
    const eyeOffIcon = document.querySelector('.eye-off'); // Ícone de olho fechado (não visível)
    const loginForm = document.getElementById('loginForm'); // Formulário de login
    const emailInput = document.getElementById('emailInput'); // Campo de entrada para o email

    // Função para alternar a visibilidade da senha
    const togglePasswordVisibility = () => {
        // Alterna o tipo de entrada entre 'password' e 'text'
        const isPassword = passwordInput.type === 'password'; // Verifica se a senha está oculta
        passwordInput.type = isPassword ? 'text' : 'password'; // Atualiza o tipo de entrada
        // Alterna a classe 'active' dos ícones de olho
        eyeIcon.classList.toggle('active', !isPassword);
        eyeOffIcon.classList.toggle('active', isPassword);
    };

    // Adiciona um ouvinte de evento ao botão de alternância de senha
    togglePassword.addEventListener('click', togglePasswordVisibility);

    // Inicializa o ícone "eye" como visível
    eyeIcon.classList.add('active');

    // Adiciona um ouvinte de evento para o envio do formulário de login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Previne o envio padrão do formulário
        console.log('Login attempted'); // Aqui você normalmente trataria a lógica de login
    });

    // Adiciona eventos de input para verificar os campos de email e senha
    emailInput.addEventListener('input', verificarCampos); // Verifica o campo de email
    passwordInput.addEventListener('input', verificarCampos); // Verifica o campo de senha
});
