import React, { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';

import TableRow from './tables-row';
import Formulario from '../form';
import MeuPopUp from '../../shared/popup';

class Tabela extends Component{
    state = {
        dadosTabela: [
          {nome: "Jocimar", livro: "Dadada", preco: "todos"},
          {nome: "Dadada", livro: "Jocimar", preco:"De graça"},
          {nome: "Manuela", livro: "Coisinha linda", preco: 951},
          {nome: "Jorge Luiz", livro: "The best of the universe", preco: 9999},
        ],
      }
    
      apagaLinha = index =>{
        const { dadosTabela } = this.state;
        this.setState({
            dadosTabela: dadosTabela.filter((autor, pos)=>{
                return index !== pos;
            }),
        })
        MeuPopUp.exibeMensagem("delete", "Dados apagado com sucesso!!!");        
      }

      add = (dados)=>{
          this.setState({
              dadosTabela: [...this.state.dadosTabela, dados]
          })
      }

    render(){
        return (
            <>
            <table className='centered highlight'>
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Livro</td>
                        <td>Preco</td>
                        <td>Ações</td>
                    </tr>
                </thead>
                <TableRow linhas = {this.state.dadosTabela} apaga = { this.apagaLinha }/>
            </table>
            <Formulario adcionar={this.add}/>
            </>
        )
    }
}

export default Tabela;