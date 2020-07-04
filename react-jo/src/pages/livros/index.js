import React, { useState, useEffect } from 'react';

import Header from '../../components/header';
import GenericTable from '../../components/table/generic-table'

import apiService from '../../service/api-service';


const Livros = () => {

    const [dadosTabela, setDadosTabela] = useState([]);
    useEffect(()=>{
        apiService.listaLivros()
            .then(resp => resp.data)
            .then(livros => {
                setDadosTabela([...dadosTabela, ...livros])
            })
    }, []);
    
    return (
        <>
            <Header />
            <h2>Página dos Livros</h2>
            <GenericTable classe={"container mb-10"} linhas={dadosTabela} colunas={['livro']} />
        </>
    )
}

export default Livros;