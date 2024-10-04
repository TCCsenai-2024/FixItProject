from django.urls import path
from . import views

# Definição das rotas do aplicativo
urlpatterns = [
    path('', views.index, name='index'),  # Rota para a página inicial
    path('login/', views.login_view, name='login'),  # Rota para a página de login
    path('register/', views.register_view, name='register'),  # Rota para a página de registro
    path('plataform/', views.plataforma_view, name='plataform'),  # Rota para a plataforma do usuário
    path('logout/', views.logout_view, name='logout'),  # Rota para o logout
]
