import React, { Component } from 'react';

import Header from '../../components/header';
import MontaTabela from '../../components/table/tables-row';

import MeuPopUp from '../../shared/popup';

import apiService from '../../service/api-service';

class Livros extends Component{

    constructor(props){
        super(props);
        this.state ={
            dadosTabela: []
        }

        this.constantesTabela = {
            cabecalho: ['Livros'],
            colunas: ['livro']
        }
    }

    componentDidMount(){
        apiService.listaLivros()
            .then(res => {
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
                <div className="container mb-10">
                    <h2>Página dos Livros</h2>
                    <MontaTabela linhas = {this.state.dadosTabela} tableHead={this.constantesTabela.cabecalho} colunas={this.constantesTabela.colunas} acao={false}/>
                </div>
            </>
        )
    }
}

export default Livros;