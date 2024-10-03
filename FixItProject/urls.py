from django.contrib import admin  # Importa o módulo de administração do Django
from django.urls import path, include  # Importa as funções para definir rotas

# Define a lista de URLs do projeto
urlpatterns = [
    path('admin/', admin.site.urls),  # Rota para o painel de administração do Django
    path('', include('app.urls')),  # Inclui as rotas definidas no aplicativo 'app'
]
