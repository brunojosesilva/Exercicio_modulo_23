// Feito em ajax com fetch API
$(document).ready(function () {

    //Endpoint do github
    const endpoint = 'https://api.github.com/users/brunojosesilva';

    // Fetch com resposta API Json
    fetch(endpoint)
    .then(function (resposta) {
        // Pegando a resposta
        return resposta.json();
    })
    .then(function (json) {

        // Montando a resposta
        const nome = json.name;
        const usuario = json.login;
        const avatar = json.avatar_url;
        const seguidores = json.followers;
        const seguindo = json.following;
        const repositorio = json.public_repos;
        const link = json.html_url;

        // Atribuindo o valor no campo
        $('#nome').text(nome);
        $('#usuario').text(usuario);
        $('#seguidores').text(seguidores);
        $('#seguindo').text(seguindo);
        $('#avatar').prop('src',avatar);
        $('#link').prop('href',link);
        $('#repositorio').text(repositorio);

    })
    .catch(function (erro) { // utilizado para capturar o erro
        alert("Ocorreu um erro");
    })
})