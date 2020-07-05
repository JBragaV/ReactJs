const API_BASE = 'http://localhost:8000/api/autor';

const apiService = {
    listar: () => {
        return fetch(`${API_BASE}`)
            .then(res => res.json())
            .catch(erro => {
                console.log(erro);
                throw new Error("Ops!!!, Aconteceu algum erro. Tente mais tarde");
            });
    },
    listaLivros: () => {
        return fetch(`${API_BASE}/livro`)
            .then(res => res.json())
            .catch(erro => {
                console.log(erro);
                throw new Error("Ops!!!, Aconteceu algum erro. Tente mais tarde");
            });
    },
    listaAutor: () => {
        return fetch(`${API_BASE}/nome`)
            .then(res => res.json())
            .catch(erro => {
                console.log(erro);
                throw new Error("Ops!!!, Aconteceu algum erro. Tente mais tarde");
            });
    },
    listaAutorId: id => {
        return fetch(`${API_BASE}/${id}`)
            .then(res => res.json())
            .catch(erro => {
                console.log(erro);
                throw new Error("Ops!!!, Aconteceu algum erro. Tente mais tarde");
            });
    },

    adicionar: autor =>{
        return fetch(`${API_BASE}`, {method: 'POST', headers: {'content-type': 'application/json'}, body: autor})
            .then(res=> res.json())
            .catch(erro => {
                console.log(erro)
                throw new Error("Ops!!!, Erro ao adiconar os dados no banco de dados, tente mais tarde!!!");
            });
    },
    atualizaAutor: autor =>{
        return fetch(`${API_BASE}/${autor.id}`, {method: 'PATCH', headers: {'content-type': 'application/json'}, body: autor});
    },
    deletar: id =>{
        return fetch(`${API_BASE}/${id}`, {method: 'DELETE', Headers: {'content-type': 'application/json'}})
    },
    tratarErro: res =>{
        if(!res.ok) throw Error(res.responseText);
        return res.json();
    }
}

export default apiService;