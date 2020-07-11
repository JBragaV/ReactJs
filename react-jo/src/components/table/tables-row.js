import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const MontaTabela = props=>{
    const cabecalho = props.tableHead;
    const dadosTabela  = props.linhas;
    const colunas = props.colunas;
    const acao = props.acao;

    const CellRemove = ({acao, id}) =>{
        if(!acao) return null;

        if(!id) return (<TableCell align="center">Ações</TableCell>);

        return (
            <TableCell align="center">
                <Grid container justify="space-evenly" alignItems="center">
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<CloudUploadIcon />}>
                            Atualizar
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon />}
                            onClick = {()=>{props.apaga(id)} }>
                                Deletar
                        </Button>
                    </Grid>
                </Grid>
            </TableCell>
        )
    }

    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        { cabecalho.map((coluna, index) => (
                            <TableCell key={index} align="center">{coluna}</TableCell>
                        ))}
                        <CellRemove acao = {acao}/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { dadosTabela.map(linha => (
                        <TableRow key={linha.id}>
                            {colunas.map((coluna, index) => (
                                <TableCell key={index} align="center">{linha[coluna]}</TableCell>
                            ))}
                            <CellRemove acao = {acao} id = {linha.id}/>  
                        </TableRow>  
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MontaTabela;

