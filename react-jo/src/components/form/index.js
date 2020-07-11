import React, { useState, Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


import Grid from '@material-ui/core/Grid';

import ValidatorForm from '../../shared/validators';
import MeuToast from '../../shared/toast';

const estilo = makeStyles((theme) =>({
    afasta: {
        marginBottom: theme.spacing(1) 
    }
}))

const Formulario = props =>{
    
    const [dados, setDados] = useState({
        nome: '',
        livro: '',
        preco: ''
    });


    const handleClose = () => {
        setMensagem(false);
    }

    const [mensagem, setMensagem] = useState({
        abrir: false,
        texto: '',
        tipo: ''
    })

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
            const erros = valid.errosArray().reduce((texto, campos)=>{
                return `${texto} ${campos.mensagem}. `;
            }, '');
            setMensagem({
                abrir: true,
                texto: erros,
                tipo: 'error'
            })
        }
    }
    
    const classe = estilo();
    return(
        <Fragment>
            <MeuToast abrir={mensagem.abrir} handleClose={handleClose} msg={mensagem.texto} severity={mensagem.tipo}/>
            <form>
                <Grid className={classe.afasta} container spacing={3} alignItems="center" justify="space-evenly">
                    <Grid item xs={1} sm={4}>
                        <TextField
                            fullWidth
                            id='nome' 
                            label='Autor'
                            name = 'nome' 
                            value={dados.nome} 
                            onChange = {ListeningEventInput} 
                            variant='outlined'
                            />
                    </Grid>
                    <Grid item xs={1} sm={4}>
                        <TextField
                            fullWidth
                            id='livro' 
                            label='Livro'
                            name = 'livro' 
                            value={dados.livro} 
                            onChange = {ListeningEventInput} 
                            variant='outlined'
                            />
                    </Grid>
                    <Grid item xs={1} sm={4}>
                        <TextField
                            fullWidth
                            id='preco' 
                            label='Preço'
                            name = 'preco' 
                            value={dados.preco} 
                            onChange = {ListeningEventInput} 
                            variant='outlined'                
                            />
                    </Grid>
                </Grid>
                <Grid container item>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<SaveIcon />}
                        onClick={()=>Adiconando(dados)}
                    >
                        Salvar
                    </Button>
                </Grid>
            </form>
        </Fragment>
    );
}

export default Formulario;