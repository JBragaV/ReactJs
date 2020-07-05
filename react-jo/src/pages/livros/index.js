import React, { Component } from 'react';

import Header from '../../components/header';
import GenericTable from '../../components/table/generic-table';

import MeuPopUp from '../../shared/popup';

import apiService from '../../service/api-service';

class Livros extends Component{

    constructor(props){
        super(props);
        this.state ={
            dadosTabela: []
        }
    }

    componentDidMount(){
        apiService.listaLivros()
            .then(res => {
                console.log(res.data);
                this.setState({dadosTabela: [...res.data]})
            })
            .catch(erro => {
                MeuPopUp.exibeMensagem('error', "Erro ao buscar os livros no banco de dados, tente mais tarde!!!");
                console.log(erro);

            });
    }
    render(){
        return (
            <>
                <Header />
                <h2>Página dos Livros</h2>
                <GenericTable classe={"container mb-10"} linhas={this.state.dadosTabela} colunas={['livro']} />
            </>
        )
    }
}

export default Livros;