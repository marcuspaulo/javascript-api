const axios = require('axios').default; // Import do Axios

const user = 'marcuspaulo'; // Apenas uma variável para teste, vamos mudar no futuro

if (user) { // Apenas para verificar se o valor não está vazio, podemos adicionar um else
    let url = `https://api.github.com/users/${user}/repos`
    axios.get(url, {})
        .then((response) => {  // Uma chamada para a API
            for (let { full_name, url } of response.data) { // Após a resposta, vamos percorrer todos os elementos
                console.log(`full_name: ${full_name} - url ${url}`); // Dessa API, eu quero apenas o Nome e a URL dos repositórios
            }
        })
        .catch(err => {
            console.log(err); // Só vai entrar aqui, em caso de erro da API.
        })
}