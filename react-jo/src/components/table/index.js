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
    apiService.deletar(id).then(res => apiService.tratarErro(res))
        .then(res => {
            if(res.message === 'deleted'){
                this.setState({dadosTabela: [...listaAtual]})
                MeuPopUp.exibeMensagem("delete", "Dados apagado com sucesso!!!");        
            }
        }).catch(err => {
            MeuPopUp.exibeMensagem("erro", "Erro ao tentar deletar dados, tente mais tarde!!!");        
        })
    }

    add = autor=>{
        apiService.adicionar(JSON.stringify(autor))
        .then(resp => apiService.tratarErro(resp))
        .then(res => {
            if(res.message === 'success'){
                this.setState({
                    dadosTabela: [...this.state.dadosTabela, res.dada]
                });
                MeuPopUp.exibeMensagem('success', "Dados cadastrados com sucesso!!!");
            }
        })
        .catch(err => {
            console.log(err);
            MeuPopUp.exibeMensagem("erro", "Erro ao tentar adicionar dados, tente mais tarde!!!;Continuar daqui        
        })
    }

     componentDidMount(){
        apiService.listar()
            .then(dados => this.setState({dadosTabela: [...this.state.dadosTabela, ...dados.data]}))
            .catch(erro =>{
                console.log("Cheguei agora!!!")
                MeuPopUp.exibeMensagem("erro", "erro");
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