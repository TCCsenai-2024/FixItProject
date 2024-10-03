import os
from django.core.asgi import get_asgi_application  # Importa a função para obter a aplicação ASGI

# Define o módulo de configurações do Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'FixItProject.settings')

# Obtém a aplicação ASGI para o projeto
application = get_asgi_application()
