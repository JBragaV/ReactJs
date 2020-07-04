const API_BASE = 'http://localhost:8000/pi/autor';

const apiService = {
    listar: () => {
        return fetch(`${API_BASE}`);
    },
    listaLivros: () => {
        return fetch(`${API_BASE}/livro`);
    },
    listaAutor: () => {
        return fetch(`${API_BASE}/nome`);
    },
    listaAutorId: id => {
        return fetch(`${API_BASE}/${id}`);
    },

    adicionar: autor =>{
        return fetch(`${API_BASE}`, {method: 'POST', headers: {'content-type': 'application/json'}, body: autor});
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