import os
from pathlib import Path

# Define o diretório base do projeto, que é o caminho onde o arquivo de configurações está localizado
BASE_DIR = Path(__file__).resolve().parent.parent

# Configurações de segurança
# Mantenha a chave secreta em produção em segredo
SECRET_KEY = 'django-insecure-v@dazfnmomg-e4$a#oaj!0o6_dh=j(a-=a4s=tcj0i9psj-760'

# Mantenha o modo de depuração desativado em produção
DEBUG = True

# Hosts permitidos (deixe vazio durante o desenvolvimento)
ALLOWED_HOSTS = ['.vercel.app']

# Definição da aplicação
INSTALLED_APPS = [
    'django.contrib.admin',  # Administração do Django
    'django.contrib.auth',   # Sistema de autenticação
    'django.contrib.contenttypes',  # Suporte a tipos de conteúdo
    'django.contrib.sessions',  # Suporte a sessões
    'django.contrib.messages',  # Suporte a mensagens
    'django.contrib.staticfiles',  # Suporte a arquivos estáticos
    'app',  # Sua aplicação
]

# Middleware que processa as requisições e respostas
MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',  # Segurança
    'django.contrib.sessions.middleware.SessionMiddleware',  # Gerenciamento de sessões
    'django.middleware.common.CommonMiddleware',  # Middleware comum
    'django.middleware.csrf.CsrfViewMiddleware',  # Proteção contra CSRF
    'django.contrib.auth.middleware.AuthenticationMiddleware',  # Autenticação de usuários
    'django.contrib.messages.middleware.MessageMiddleware',  # Mensagens
    'django.middleware.clickjacking.XFrameOptionsMiddleware',  # Prevenção contra clickjacking
]

# Configuração do roteamento de URLs
ROOT_URLCONF = 'FixItProject.urls'

# Configurações dos templates
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',  # Usando o backend de templates do Django
        'DIRS': [],  # Diretórios de templates adicionais
        'APP_DIRS': True,  # Procura por templates dentro dos diretórios de aplicativos
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',  # Contexto para depuração
                'django.template.context_processors.request',  # Contexto de requisições
                'django.contrib.auth.context_processors.auth',  # Contexto de autenticação
                'django.contrib.messages.context_processors.messages',  # Contexto de mensagens
            ],
        },
    },
]

# Aplicação WSGI
WSGI_APPLICATION = 'FixItProject.wsgi.application'

# Configurações do banco de dados
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',  # Usando o SQLite como banco de dados
        'NAME': BASE_DIR / 'db.sqlite3',  # Caminho do arquivo do banco de dados
    }
}

# Validação de senhas
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',  # Valida similaridade de atributos
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',  # Valida comprimento mínimo
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',  # Valida senhas comuns
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',  # Valida senhas numéricas
    },
]

# Internacionalização
LANGUAGE_CODE = 'en-us'  # Código do idioma padrão

TIME_ZONE = 'UTC'  # Fuso horário

USE_I18N = True  # Ativar internacionalização
USE_TZ = True  # Ativar suporte a fusos horários

# Arquivos estáticos (CSS, JavaScript, Imagens)
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL = '/static/'  # URL base para arquivos estáticos
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'app/static')]  # Diretórios adicionais para arquivos estáticos

LOGIN_URL = 'login'  # URL de login padrão

# Tipo de campo de chave primária padrão
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'  # Usar BigAutoField para chaves primárias
