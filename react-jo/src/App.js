import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import Header from './components/header';
import Table from './components/table';


class App extends Component {

  render(){
    return (
      <div className="App">
        <Header />
        <h1>Hello World!!!</h1>
        <h2>Tabela componentizada</h2>
        <Table />
      </div>
    );
  }
}

export default App;
