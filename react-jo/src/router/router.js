import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from '../pages/home'
import SobrePage from '../pages/sobre';

const ROTAS = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/sobre' component={SobrePage}/>
                <Route path='/jocimar' component={SobrePage}/>
                <Route path='/dadada' component={SobrePage}/>
                <Route path='/autores' component={SobrePage}/>
                <Route path='/livros' component={SobrePage}/>
                <Route component={SobrePage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default ROTAS;