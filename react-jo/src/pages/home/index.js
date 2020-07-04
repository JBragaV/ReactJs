import React, { Fragment } from 'react';

import Header from '../../components/header';
import TablePage from '../tabela';

const HomePage = () => {    
    return(
        <Fragment>
            <Header />
            <div className="container mb-10">
                <h1>Hello World!!!</h1>
                <h2>Tabela componentizada</h2>
                <TablePage />
            </div>
        </Fragment>
    )
}

export default HomePage;