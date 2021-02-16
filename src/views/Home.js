import React, { useContext } from 'react'

import { Link } from "react-router-dom";

import { Context } from "@store/appContext";
import MovieIndex from "@views/movies/Index";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function Home() {
    const { store } = useContext(Context);

    return(
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MovieIndex}  />
          </Switch>
        </BrowserRouter>
        
    )
}

export default Home;