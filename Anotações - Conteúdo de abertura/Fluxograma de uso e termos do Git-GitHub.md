# criar chave ssh

1. Gere um Git Bash no desktop

2. Digite o código ssh-keygen -t ed25519 -C fabriciosantos.dev@gmail.com

3. Elabore/coloque uma senha

4. Acesse a pasta, pelo Git Bash, com o endereço c/users/fabri(**usuário do pc**)/ .ssh (.**ssh é uma pasta oculta**)

5.   Digite dir, dentro da pasta ssh, para visualizar as chaves.

6.   cat id_ed25519.pub – expor a chave (pública)

7.   Copiar a chave, logo após, vá até o site e registre a chave no GitHub

8.   Retorne ao Git Bash, coloque o código: eval $(ssh-agent -s)

9.   Logo após, o código - ssh-add id_ed25519 – expor chave (privada), posteriormente, o sistema vai pedirá a senha anteriormente digitada ou criada.

10. Vá no site do GitHub, pegue o endereço do SSH no repositório

11. Digite, no Git Bash: git clone (espaço) e copie o endereço da etapa anterior 

12. Digite Yes

# Criar commit

1.   git init = iniciar um repositório

2.   git config --global user.email "fabriciosantos.dev@gmail.com" 

3. git config --global user.name “Moriiarty”

4.   git add * = adicionar todos os arquivos no repositório

5. git commit -m “commit inicial” = preparar o documento para upload - commitar

6. git remote add origin (espaço) e o link do repositório (site/HTTPS) =  vincular o repositório virtual (só precisa na primeira vez)

7. git push origin master = enviar para o repositório remoto 

8. git pull origin master = puxar o arquivo do repositório virtual, antes de enviar pela segunda vez

#  Termos

* dir -a = visualizar pastas ocultas

* mv nome do arquivo ./nome da pasta = mover arquivo para outra pasta

* git config –global –unset user.email (apagar email)

* git config –global –unset user.name (apagar name)

* pwd = mostrar todos os caminhos até chegar ao local do endereço atual

* git remote -v = lista de repositório remoto que você tem cadastrado

* git status = pendência do repositório (máquina)

 