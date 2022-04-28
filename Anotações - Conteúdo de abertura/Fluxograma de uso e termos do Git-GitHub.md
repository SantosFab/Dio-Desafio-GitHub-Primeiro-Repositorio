# Criar chave - ssh

1. Gere um Git Bash no desktop
2. Digite o código ssh-keygen -t ed25519 -C fabriciosantos.dev@gmail.com
3. Elabore/coloque uma senha
4. Acesse a pasta, pelo Git Bash, com o endereço c/users/fabri(**usuário do pc**)/ .ssh (.**ssh é uma pasta oculta**)
5. Digite dir, dentro da pasta ssh, para visualizar as chaves.
6. cat id_ed25519.pub – expor a chave (pública)
7. Copiar a chave, logo após, vá até o site e registre a chave no GitHub
8. Retorne ao Git Bash, coloque o código: eval $(ssh-agent -s)
9. Logo após, o código - ssh-add id_ed25519 – expor chave (privada), posteriormente, o sistema vai pedirá a senha anteriormente digitada ou criada.

# Vincular um repositório virtual a uma pasta local

1.   Vá no site do GitHub, pegue o endereço do HTTPS/SSH no repositório
2.   Digite, no Git Bash: git clone (espaço) e copie o endereço da etapa anterior 
3.   Digite "Yes"
4.   git init = iniciar um repositório 
5.   git config --global user.email "fabriciosantos.dev@gmail.com"  - caso necessário
6.   git config --global user.name “SantosFab” - caso necessário
7.   Após efetuar alterações de arquivos
8.   git add * = adicionar todos os arquivos no commit
9.   git commit -m “**comentário**” = preparar o documento para upload - commitar
10.   git push origin main

# Vincular o commit local a um repositório

1. Executar o Git Bash na pasta do commit desejada
2. git init = iniciar um repositório 
3. git config --global user.email "fabriciosantos.dev@gmail.com" - caso necessário
4. git config --global user.name “SantosFab” - caso necessário
5. git remote add **origin** (espaço) e o link do novo repositório (site/HTTPS/SSH) =  vincular ao repositório virtual (executar essa atividade somente na primeira vez)
6. git push origin master = enviar para o repositório remoto 
7. git pull origin master = puxar o arquivo do repositório virtual, antes de enviar - caso necessário
8. corrigir possível alterações
9. git add * = adicionar todos os arquivos no repositório
10. git push origin master
#  Termos

* dir -a = visualizar pastas ocultas

* mv nome do arquivo ./nome da pasta = mover arquivo para outra pasta

* git config --list = lista de todas as configurações no seu git

* git config -–global –-unset user.email = apagar email

* git config –-global –-unset user.name = apagar name

* pwd = mostrar todos os caminhos até chegar ao local do endereço atual

* git remote -v = lista de repositório remoto que você tem cadastrado

* git status = pendência do repositório (máquina)

