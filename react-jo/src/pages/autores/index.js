import React, { Component, Fragment } from 'react';

import Header from '../../components/header';
import MontaTabela from '../../components/table/tables-row'

import MeuPopUp from '../../shared/popup';

import apiService from '../../service/api-service';

class Autores extends Component {
    constructor(props){
        super(props);
        this.state = {
            dadosTabela: []
        }
        this.constantesTabela = {
            cabecalho: ['Autores'],
            colunas: ['nome']
        }
    }
    

    componentDidMount(){
        apiService.listaAutor()
            .then(resp => resp.data)
            .then(autores => {
                this.setState({dadosTabela:[...this.state.dadosTabela, ...autores]})
            })
            .catch(erro =>{
                console.log(erro);
                MeuPopUp.exibeMensagem('error', "Ops!!! Não foi possível buscar os autores. Tente mais tarde!!!");
            })
    }
      

    render(){
        return (
            <Fragment>
                <Header />
                    <div className="container mb-10">
                        <h2>Página dos Autores</h2>
                        <MontaTabela 
                            linhas = {this.state.dadosTabela} 
                            tableHead = {this.constantesTabela.cabecalho}
                            colunas = {this.constantesTabela.colunas} 
                            acao={false}
                        />
                    </div>
            </Fragment>
        )
    }
}

export default Autores;