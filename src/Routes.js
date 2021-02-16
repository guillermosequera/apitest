import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Movies from './views/movies/Index';
import Actors from './views/actors/Index';
import Tv from './views/tvshows/Index';
import Moviesdetail from './views/movies/MovieDetails';
import Tvdetail from './views/tvshows/TvDetails';
import Actordetail from './views/actors/ActorDetails';
import { URLBASE } from './api/config';


const Routes = () => {

    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={`/${URLBASE}/`} component={Movies}  />
                <Route exact path={`/${URLBASE}/movie/:id`} component={Moviesdetail} />
                <Route exact path={`/${URLBASE}/tv`} component={Tv}  />
                <Route exact path={`/${URLBASE}/tv/:id`} component={Tvdetail} />
                <Route exact path={`/${URLBASE}/actors`} component={Actors}  />
                <Route exact path={`/${URLBASE}/actor/:id`} component={Actordetail} />
                <Route render={ () => <h2>404</h2> } />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;