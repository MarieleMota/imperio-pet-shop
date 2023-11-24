function logar() {
    var login = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    if (login == document.getElementById('email').value && senha == document.getElementById('password').value) {
        alert('sucesso');
        location.href = 'principal.html';
    } else {
        alert('usuário ou senha incorretos');
    }
}