import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Anuncios from '../pages/Anuncios';
import Relatorios from '../pages/Relatorios';
import FormAnuncio from '../pages/Anuncios/Form';

const Routes = () => (
    <Switch>
        <Route path='/' component={Anuncios} exact /> 
        <Route path='/relatorios' component={Relatorios} exact /> 
        <Route path='/novo-anuncio' component={FormAnuncio} exact /> 
    </Switch>
)

export default Routes;