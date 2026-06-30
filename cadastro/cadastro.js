const realizarCadastro = (eventrec) => {
    eventrec.preventDefault();

    const loginInputValue = document.getElementById('input-usuario');
    const senhaInputValue = document.getElementById('input-senha');

    const usuarioASerSalvo = { login: loginInputValue.value, senha: senhaInputValue.value }

    let valoresJaSalvos = JSON.parse(localStorage.getItem('usuariosParaLogin'));

    if (!valoresJaSalvos) {
        valoresJaSalvos = [];
    }

    
    valoresJaSalvos.push(usuarioASerSalvo);

    
    localStorage.setItem('usuariosParaLogin', JSON.stringify(valoresJaSalvos));

    
    alert('Cadastro realizado com sucesso!');
    window.location.href = '../login/login.html';
}