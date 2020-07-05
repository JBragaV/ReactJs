import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';

import MontaTabela from './tables-row';
import Formulario from '../form';
import MeuPopUp from '../../shared/popup';
import apiService from '../../service/api-service';

class Tabela extends Component{

    constructor(props){
        super(props);

        this.state = {
            dadosTabela: [],
        }
    }
    
    apagaLinha = id =>{
    const { dadosTabela } = this.state;
    const listaAtual = dadosTabela.filter(autor=>{
        return id !== autor.id;
    });
    apiService.deletar(id)
        .then(() => {
            this.setState({dadosTabela: [...listaAtual]})
            MeuPopUp.exibeMensagem("delete", "Dados apagado com sucesso!!!");        
        }).catch(err => {
            console.log(err);
            MeuPopUp.exibeMensagem("error", err.message);        
        })
    }

    add = autor=>{
        apiService.adicionar(JSON.stringify(autor))
        .then(res => {
            console.log();
                this.setState({
                    dadosTabela: [...this.state.dadosTabela, res.data]
                });
                MeuPopUp.exibeMensagem('success', "Dados cadastrados com sucesso!!!");
        })
        .catch(err => {
            console.log(err);
            MeuPopUp.exibeMensagem("error", err.message);        
        })
    }

     componentDidMount(){
        apiService.listar()
            .then(dados => {
                this.setState({dadosTabela: [...this.state.dadosTabela, ...dados.data]});
            })
            .catch(err =>{
                console.log("Deu merda na classe tabela!!!")
                MeuPopUp.exibeMensagem("error", err.message);
            })
    }

    render(){
        return (
            <>
                <MontaTabela linhas = {this.state.dadosTabela} apaga = { this.apagaLinha } colunas={['nome', 'Livro', 'Preço']} acao={true}/>
                <Formulario adcionar={this.add}/>
            </>
        )
    }
}

export default Tabela;