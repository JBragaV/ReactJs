import React, { useState } from 'react';

import ValidatorForm from '../../shared/validators';
import MeuPopUp from '../../shared/popup';

const Formulario = props =>{
    
    const [dados, setDados] = useState({
        nome: '',
        livro: '',
        preco: ''
    });

    function ListeningEventInput(event){
        const {name, value} = event.target;
        setDados({...dados,[name]: value});
    }

    function Adiconando(dados){
        const valid = new ValidatorForm();
        if(valid.valida(dados)){
            props.adcionar(dados);
            setDados({
                nome: '',
                livro: '',
                preco: ''
            })
        }else{
            valid.errosArray().forEach(erro => {
                MeuPopUp.exibeMensagem('error', erro.mensagem)
            })
        }
    }
    
    return(
        <form >
            <label htmlFor="nome">Nome</label>
            <input id="nome" type="text" name="nome" value={dados.nome} onChange = {ListeningEventInput}/>

            <label htmlFor="livro">Livro</label>
            <input id="livro" type="text" name="livro" value={dados.livro} onChange = {ListeningEventInput}/>

            <label htmlFor="preco">Preço</label>
            <input id="preco" type="text"name="preco" value={dados.preco} onChange = {ListeningEventInput}  />

            <button type="button" onClick={()=>Adiconando(dados)}>Salvar
            </button>
        </form>
    );
}

export default Formulario;