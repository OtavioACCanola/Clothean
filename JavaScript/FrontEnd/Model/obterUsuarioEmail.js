function obterUsuariosEmail(email) { // Método para obter os alunos do arquivo JSON
    return fetch(`https://clothean-r1xw.onrender.com/usuarios/${email}`)
        .then(res => res.json());
}