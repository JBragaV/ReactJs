import React from 'react';


const GenericTable = props =>{

    const colunas = props.colunas;
    const dados = props.linhas;
    const classe = props.classe;

    return (
        <div className={classe}>
            <table className='centered highlight'>
                <thead>
                    <tr>
                        {colunas.map((coluna, index) => (
                            <td key={index}>{coluna}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        dados.map((linha, index) => (
                            <tr key={index}>
                                {colunas.map(coluna => (
                                    <td key={index}>{linha[coluna]}</td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}


export default GenericTable;