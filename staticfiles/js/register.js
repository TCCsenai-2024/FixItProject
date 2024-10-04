// Função para limpar a mensagem de erro geral
function limparErroGeral() {
    const errorDiv = document.getElementById('errorDiv');
    errorDiv.textContent = ''; // Limpa o texto do erro
    errorDiv.classList.remove('show'); // Esconde a div de erro geral
}

// Função para mostrar uma mensagem de erro geral
function mostrarErroGeral(mensagem) {
    const errorDiv = document.getElementById('errorDiv');
    errorDiv.textContent = mensagem; // Insere a mensagem de erro
    errorDiv.style.display = 'block'; // Mostra a div de erro
    errorDiv.classList.add('show'); // Adiciona a classe 'show' para exibir o erro

    // Adiciona a classe de erro aos inputs
    marcarErroInputs(true);
}

// Função para marcar ou desmarcar erro em campos de entrada
function marcarErroInputs(hasError) {
    const emailInput = document.getElementById('emailInput');
    const senhaInput = document.getElementById('senhaInput');

    // Adiciona ou remove a classe de erro com base no parâmetro
    if (hasError) {
        emailInput.classList.add('input-error'); // Marca erro no email
        senhaInput.classList.add('input-error'); // Marca erro na senha
    } else {
        emailInput.classList.remove('input-error'); // Remove erro no email
        senhaInput.classList.remove('input-error'); // Remove erro na senha
    }
}

// Função para limpar mensagens de erro específicas de um input
function limparMensagensErro(input, errorElement) {
    errorElement.textContent = ''; // Limpa a mensagem de erro anterior
    errorElement.classList.remove('show'); // Remove a classe 'show'
    input.classList.remove('input-error'); // Remove a classe de erro
}

// Função para validar o campo de email
function validarEmail() {
    const emailInput = document.getElementById('emailInput');
    const errorMessage = document.getElementById('errorMessage');
    const email = emailInput.value.toLowerCase();

    limparMensagensErro(emailInput, errorMessage); // Limpa erros anteriores

    // Verifica se o campo de email está vazio
    if (!email) return false;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'O email fornecido não é válido.'; // Mensagem de erro
        errorMessage.classList.add('error', 'show'); // Exibe erro
        emailInput.classList.add('input-error'); // Marca erro
        return false;
    }

    return true; // Retorna verdadeiro se o email for válido
}

// Função para validar o campo de senha
function validarSenha() {
    const senhaInput = document.getElementById('senhaInput');
    const senhaError = document.getElementById('senhaError');
    const senha = senhaInput.value;

    limparMensagensErro(senhaInput, senhaError); // Limpa erros anteriores

    // Verifica se o campo de senha está vazio
    if (!senha) return false;

    // Validações de senha
    if (senha.includes(' ')) {
        senhaError.textContent = 'A senha não deve conter espaços.';
        senhaError.classList.add('error', 'show');
        senhaInput.classList.add('input-error');
        return false;
    }
    if (senha.length < 6) {
        senhaError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        senhaError.classList.add('error', 'show');
        senhaInput.classList.add('input-error');
        return false;
    }
    if (!/[A-Z]/.test(senha)) {
        senhaError.textContent = 'A senha deve conter pelo menos uma letra maiúscula.';
        senhaError.classList.add('error', 'show');
        senhaInput.classList.add('input-error');
        return false;
    }
    if (!/[a-z]/.test(senha)) {
        senhaError.textContent = 'A senha deve conter pelo menos uma letra minúscula.';
        senhaError.classList.add('error', 'show');
        senhaInput.classList.add('input-error');
        return false;
    }
    if (!/[0-9]/.test(senha)) {
        senhaError.textContent = 'A senha deve conter pelo menos um número.';
        senhaError.classList.add('error', 'show');
        senhaInput.classList.add('input-error');
        return false;
    }

    return true; // Retorna verdadeiro se a senha for válida
}

// Função para verificar os campos de entrada e habilitar/desabilitar o botão de envio
function verificarCampos() {
    const submitButton = document.getElementById('submitButton');

    const isEmailValid = validarEmail();
    const isSenhaValid = validarSenha();

    limparErroGeral(); // Limpa mensagem de erro geral

    // Habilita ou desabilita o botão de envio com base na validação
    submitButton.disabled = !(isEmailValid && isSenhaValid);
    submitButton.classList.toggle("button-disabled", submitButton.disabled); // Atualiza o estado do botão
}

// Adiciona eventos de input aos campos para verificar a validade
document.getElementById('emailInput').addEventListener('input', verificarCampos);
document.getElementById('senhaInput').addEventListener('input', verificarCampos);
