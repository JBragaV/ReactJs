import React, { Component, Fragment } from 'react';

import Header from '../../components/header';

class Autores extends Component {

    state = {
        dadosTabela: [
          {nome: "Jocimar", livro: "Dadada", preco: "todos"},
          {nome: "Dadada", livro: "Jocimar", preco:"De graça"},
          {nome: "Manuela", livro: "Coisinha linda", preco: 951},
          {nome: "Jorge Luiz", livro: "The best of the universe", preco: 9999},
        ],
      }

      

    render(){
        return (
            <Fragment>
                <Header />
                <h2>Página dos Autores</h2>
            </Fragment>
        )
    }

}

export default Autores;