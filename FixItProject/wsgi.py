import os  # Importa o módulo os para interagir com variáveis de ambiente

from django.core.wsgi import get_wsgi_application  # Importa a função para obter a aplicação WSGI

# Define a variável de ambiente DJANGO_SETTINGS_MODULE com o caminho para as configurações do projeto
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'FixItProject.settings')

# Cria a aplicação WSGI que pode ser usada para servir o projeto Django
application = get_wsgi_application()

app = application