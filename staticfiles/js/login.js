// Função para limpar a mensagem de erro geral
function limparErroGeral() {
    const errorDiv = document.getElementById('errorDiv'); // Seleciona a div de erro geral
    errorDiv.textContent = ''; // Limpa a mensagem de erro
    errorDiv.classList.remove('show'); // Remove a classe 'show' para ocultar a mensagem
}

// Função para limpar mensagens de erro específicas de um input
function limparMensagensErro(input) {
    input.classList.remove('input-error'); // Remove a classe de erro do input
}

// Função para validar o campo de email
function validarEmail() {
    const emailInput = document.getElementById('emailInput'); // Seleciona o campo de entrada de email
    const email = emailInput.value.toLowerCase(); // Converte o email para minúsculas

    limparMensagensErro(emailInput); // Limpa erros anteriores

    // Verifica se o email está vazio ou inválido
    if (!email) return false; // Retorna falso se o email estiver vazio

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Padrão de validação do email
    if (!emailPattern.test(email)) {
        emailInput.classList.add('input-error'); // Marca o campo como erro se o email for inválido
        return false;
    }

    return true; // Retorna verdadeiro se o email for válido
}

// Função para validar o campo de senha
function validarSenha() {
    const senhaInput = document.getElementById('senhaInput'); // Seleciona o campo de entrada de senha
    const senha = senhaInput.value; // Obtém o valor do campo de senha

    limparMensagensErro(senhaInput); // Limpa erros anteriores

    // Verifica se a senha foi preenchida e se atende aos requisitos
    if (!senha) return false; // Retorna falso se a senha estiver vazia

    if (senha.length < 6) {
        senhaInput.classList.add('input-error'); // Marca o campo como erro se a senha for muito curta
        return false;
    }

    return true; // Retorna verdadeiro se a senha for válida
}

// Função para verificar os campos de entrada e habilitar/desabilitar o botão de envio
function verificarCampos() {
    const submitButton = document.getElementById('submitButton');

    // Valida email e senha
    const isEmailValid = validarEmail();
    const isSenhaValid = validarSenha();

    // Habilita ou desabilita o botão de envio com base na validação
    submitButton.disabled = !(isEmailValid && isSenhaValid);
    submitButton.classList.toggle("button-disabled", submitButton.disabled); // Adiciona classe de botão desabilitado
}

// Adiciona eventos de input aos campos para limpar a mensagem de erro
document.getElementById('emailInput').addEventListener('input', limparErroGeral);
document.getElementById('senhaInput').addEventListener('input', limparErroGeral);
