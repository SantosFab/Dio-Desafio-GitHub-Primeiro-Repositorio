<DOCTYPE html>
<html>
<head>
<title> Portfólio - Fabrício</title> 
</head>
<link rel="stylesheet" href="style.css">
<body>
<header>
<h1 id="title">Uso do GitHub <img class="img"src="GitHub.png"alt="Imagem da logo do GitHub"</h1>
</header>
<article class="post">
<section>
<h2 class="subtitle"> Criar chave - SSH</h2>
<ol>
<li>Gere um Git Bash no desktop
<li>Digite o código ssh-keygen -t ed25519 -C "<a href="mailto:fabriciosantos.dev@gmail.com"target="_blank">fabriciosantos.dev@gmail.com</a>"
<li>Elabore/coloque uma senha
<li>Acesse a pasta, pelo Git Bash, com o endereço c/users/fabri(usuário do pc)/ .ssh (.**ssh é uma pasta oculta**)
<li>Digite dir, dentro da pasta ssh, para visualizar as chaves.
<li>cat id_ed25519.pub – expor a chave (pública)
<li>Copiar a chave, logo após, vá até o site e registre a chave no GitHub
<li>Retorne ao Git Bash, coloque o código: eval $(ssh-agent -s)
<li>Logo após, o código - ssh-add id_ed25519 – expor chave (privada), posteriormente, o sistema vai pedirá a senha anteriormente digitada ou criada.
</ol>
</section>
<section>
<h2 class="subtitle">Vincular o commit local a um repositório</h2>
<ol>
<li>Executar o Git Bash na pasta do commit desejada
<li>git init = iniciar um repositório 
<li>git config --global user.email "<a href="mailto:fabriciosantos.dev@gmail.com"target="_blank">fabriciosantos.dev@gmail.com</a>" - caso necessário
<li>git config --global user.name “<a href="https://github.com/SantosFab"target="_blank">SantosFab</a>" - caso necessário
<li>git remote add **origin** (espaço) e o link do novo repositório (site/HTTPS/SSH) =  vincular ao repositório virtual (executar essa atividade somente na primeira vez)
<li>git push origin master = enviar para o repositório remoto 
<li>git pull origin master = puxar o arquivo do repositório virtual, antes de enviar - caso necessário
<li>corrigir possível alterações
<li>git add * = adicionar todos os arquivos no commit
<li>git push origin master
</ol>
</section>
<section>
<h2 class="subtitle">Vincular um repositório virtual a uma pasta local</h2>
<ol>
<li>Vá no site do GitHub, pegue o endereço do HTTPS/SSH no repositório
<li>Digite, no Git Bash: git clone (espaço) e copie o endereço da etapa anterior 
<li>Digite "Yes"
<li>git init = iniciar um repositório 
<li>git config --global user.email "<a href="mailto:fabriciosantos.dev@gmail.com"target="_blank">fabriciosantos.dev@gmail.com</a>"  - caso necessário
<li>git config --global user.name “<a href="https://github.com/SantosFab"target="_blank">SantosFab</a>" - caso necessário
<li>Após efetuar alterações de arquivos
<li>git add * = adicionar todos os arquivos no commit
<li>git commit -m “**comentário**” = preparar o documento para upload - commitar
<li>git push origin main
</ol>
</section>
<section>
<h2 class="subtitle">Termos</h2>
<ul>
<li>dir -a = visualizar pastas ocultas
<li>mv nome do arquivo ./nome da pasta = mover arquivo para outra pasta
<li>git config --list = lista de todas as configurações no seu git
<li>git config -–global –-unset user.email = apagar email
<li>git config –-global –-unset user.name = apagar name
<li>pwd = mostrar todos os caminhos até chegar ao local do endereço atual
<li>git remote -v = lista de repositório remoto que você tem cadastrado
<li>git status = pendência do repositório (máquina)
</ul>
</section>
<section>
</section>
</article>
</body>
<footer>
<p>
<a href="mailto:fabriciosantos.dev@gmail.com"target="_blank">E-mail para contato</a>
</p>
<p>
<a href="https://www.linkedin.com/in/fabr%C3%ADcio-santos-915a79237/"target="_blank">LinkedIn</a> 
</p>
<p>
<a href="https://github.com/SantosFab"target="_blank">GitHub</a>
</p>
</footer>
</html>