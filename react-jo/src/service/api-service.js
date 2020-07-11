const API_BASE = 'http://localhost:8000/api/autor';

const consomeApi = (erroMsg, param = '', method = 'GET', body) =>{
    return fetch(`${API_BASE}${param}`, {
        method, 
        headers: {'content-type': 'application/json'},
        body
        })
        .then(res => res.json())
        .catch(erro => {
            console.log(erro);
            throw new Error(erroMsg);
        });
}

const apiService = {
    listar: () => consomeApi("Ops!!!, Aconteceu algum erro. Tente mais tarde"),
    listaLivros: () => consomeApi("Ops!!!, Aconteceu algum erro. Tente mais tarde", '/livro'),
    listaAutor: () => consomeApi("Ops!!!, Aconteceu algum erro. Tente mais tarde", '/nome'),
    adicionar: autor => consomeApi("Ops!!!, Erro ao adiconar os dados no banco de dados, tente mais tarde!!!", '', 'POST', autor),
    deletar: id => consomeApi("Ops!!!, Erro ao deletar o dado do banco de dados.", '', `/${id}`, 'DELETE')
}

export default apiService;