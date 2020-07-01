import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/home'
import SobrePage from '../pages/sobre';
import Jocimar from '../pages/jocimar';
import Dadada from '../pages/dadada';
import Autores from '../pages/autores';
import Livros from '../pages/livros';
import NotFound from '../pages/not-found';

const ROTAS = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/sobre' component={SobrePage}/>
                <Route path='/jocimar' component={Jocimar}/>
                <Route path='/dadada' component={Dadada}/>
                <Route path='/autores' component={Autores}/>
                <Route path='/livros' component={Livros}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default ROTAS;