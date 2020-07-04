import React from 'react';

const MontaTabela = props=>{
    const dadosTabela  = props.linhas;
    const colunas = props.colunas;
    const acao = props.acao;
    return(
        <>
            <table className='centered highlight'>
                <thead>
                    <tr>
                        { colunas.map((coluna, index) => (
                            <td key={index}>{coluna}</td>
                        ))}
                        {acao && 
                            <td>Ações</td>
                        }
                    </tr>
                </thead>
                <tbody>
                    { dadosTabela.map(linha => (
                        <tr key={linha.id}>
                            <td>{linha.nome}</td>
                            <td>{linha.livro}</td>
                            <td>{linha.preco}</td>
                            {acao &&
                                <td>
                                    <button>Atualizar</button>
                                    <button onClick = {()=>{props.apaga(linha.id)} }>Deletar</button>
                                </td>
                            }
                        </tr>
                        
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default MontaTabela;

