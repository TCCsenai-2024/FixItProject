from django.contrib.auth import authenticate, login, logout  # Importa funções de autenticação de usuários
from django.shortcuts import render, redirect  # Importa funções para renderizar templates e redirecionar
from django.contrib.auth.decorators import login_required  # Importa decorador que exige autenticação
from django.views.decorators.csrf import csrf_protect  # Importa decorador para proteger contra CSRF
from django.contrib.auth.models import User  # Importa o modelo de usuário do Django

# View para a tela inicial
def index(request):
    """Renderiza a página inicial."""
    return render(request, 'index.html')

@csrf_protect
def register_view(request):
    """Cria um novo perfil de usuário."""
    if request.method == "POST":  # Verifica se o método da requisição é POST
        email = request.POST.get('email').lower()  # Obtém o email do formulário
        senha = request.POST.get('senha')  # Obtém a senha do formulário

        # Verifica se o email já está cadastrado
        if User.objects.filter(username=email).exists():
            # Se o email já estiver em uso, renderiza a página de registro com um erro
            return render(request, 'register.html', {'error': 'Email já está em uso.'})

        # Desconecta o usuário atual se estiver autenticado
        if request.user.is_authenticated:
            logout(request)

        # Cria um novo usuário com o email e senha fornecidos
        User.objects.create_user(username=email, password=senha)

        return redirect('login')  # Redireciona para a página de login após o registro bem-sucedido

    # Se a requisição não for POST, renderiza a página de registro
    return render(request, 'register.html')

@csrf_protect
def login_view(request):
    """Processa o login do usuário."""
    if request.user.is_authenticated:  # Verifica se o usuário já está autenticado
        return redirect('plataform')  # Redireciona para a tela da plataforma se o usuário estiver logado

    if request.method == "POST":  # Verifica se o método da requisição é POST
        email = request.POST.get('email').lower()  # Obtém o email do formulário
        senha = request.POST.get('senha')  # Obtém a senha do formulário

        # Tenta autenticar o usuário
        user = authenticate(request, username=email, password=senha)

        if user:  # Se o usuário for autenticado com sucesso
            login(request, user)  # Realiza o login do usuário
            return redirect('plataform')  # Redireciona para a tela da plataforma após o login bem-sucedido
        else:
            # Se a autenticação falhar, renderiza a página de login com um erro
            return render(request, 'login.html', {'error': 'Email ou senha inválidos.'})

    # Se a requisição não for POST, renderiza a página de login
    return render(request, 'login.html')

@login_required
def plataforma_view(request):
    """Renderiza a página da plataforma (somente para usuários logados)."""
    return render(request, 'plataform.html')

def logout_view(request):
    """Desconecta o usuário e redireciona para a página inicial."""
    logout(request)  # Desconecta o usuário
    return redirect('index')  # Redireciona para a página inicial após o logout
