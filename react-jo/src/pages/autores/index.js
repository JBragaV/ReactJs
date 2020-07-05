import React, { Component, Fragment } from 'react';

import Header from '../../components/header';
import GenericTable from '../../components/table/generic-table';

import MeuPopUp from '../../shared/popup';

import apiService from '../../service/api-service';

class Autores extends Component {
    constructor(props){
        super(props);
        this.state = {
            dadosTabela: []
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
                <h2>Página dos Autores</h2>
                <GenericTable classe={"container mb-10"} linhas={this.state.dadosTabela} colunas={['nome']}/>
            </Fragment>
        )
    }

}

export default Autores;