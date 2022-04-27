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

# Criar commit

1.   Vá no site do GitHub, pegue o endereço do SSH no repositório

2.   Digite, no Git Bash: git clone (espaço) e copie o endereço da etapa anterior 

3.   Digite "Yes"
4.   git init = iniciar um repositório

5.   git config --global user.email "fabriciosantos.dev@gmail.com" 

6.   git config --global user.name “Moriiarty”

7.   git add * = adicionar todos os arquivos no repositório

8.   git commit -m “commit inicial” = preparar o documento para upload - commitar

9.   git remote add origin (espaço) e o link do repositório (site/HTTPS/SSH?) =  vincular o repositório virtual (só precisa na primeira vez)

10.   git push origin master = enviar para o repositório remoto 

11.   git pull origin master = puxar o arquivo do repositório virtual, antes de enviar pela segunda vez

#  Termos

* dir -a = visualizar pastas ocultas

* mv nome do arquivo ./nome da pasta = mover arquivo para outra pasta

* git config –global –unset user.email (apagar email)

* git config –global –unset user.name (apagar name)

* pwd = mostrar todos os caminhos até chegar ao local do endereço atual

* git remote -v = lista de repositório remoto que você tem cadastrado

* git status = pendência do repositório (máquina)

 
