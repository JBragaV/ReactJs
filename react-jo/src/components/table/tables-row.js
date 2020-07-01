import React from 'react';

const TableRow = props=>{
    const dadosTabela  = props.linhas;

    return(
        <tbody>
            { dadosTabela.map((linha, index) => (
                <tr key={index}>
                    >Condicionar as colunas que eu quero renderizar e condicionar os botões. 
                    <td>{linha.nome}</td>
                    <td>{linha.livro}</td>
                    <td>{linha.preco}</td>
                    <td>
                        <button>Atualizar</button>
                        <button onClick = {()=>{props.apaga(index)} }>Deletar</button>
                    </td>
                </tr>
                
            ))}
        </tbody>
    );
}

export default TableRow;

