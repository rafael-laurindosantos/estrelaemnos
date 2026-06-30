const fazerLogin = (eventrec) => {
    
    eventrec.preventDefault();

    const usuario = document.getElementById("nomeusuario");
    const senhaUser = document.getElementById("senhausuario");

    const listaLoginsValidos = JSON.parse(localStorage.getItem('usuariosParaLogin'));

    if (!listaLoginsValidos) {
        alert('Nenhum usuário cadastrado no sistema!');
        return;
    }

    const usuarioValidado = listaLoginsValidos.find((item) =>
        item.login === usuario.value && item.senha === senhaUser.value
    );
    
    if (usuarioValidado) {
        console.log('ele pode entrar!', usuarioValidado);
        alert('Login efetuado com sucesso!');
        
        window.location.href = '../index.html'; 
    }
    else {
        console.log('ele não pode entrar!');
        alert('Usuário ou senha incorretos.');
    }
}