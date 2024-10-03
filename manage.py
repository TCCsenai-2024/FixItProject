import os  # Importa o módulo os para interagir com variáveis de ambiente
import sys  # Importa o módulo sys para manipulação de argumentos de linha de comando


def main():
    """Executa tarefas administrativas do Django."""
    # Define a variável de ambiente para as configurações do projeto
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'FixItProject.settings')

    try:
        # Tenta importar a função para executar comandos de gerenciamento do Django
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc  # Relevanta a exceção com uma mensagem personalizada

    # Executa o comando a partir da linha de comando
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()  # Chama a função main se o script for executado diretamente
