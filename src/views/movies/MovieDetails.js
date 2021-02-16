import React, { useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Context } from "./../../store/appContext";
import Header from './../../layouts/Header';
import './MovieDetail.sass';


const MovieDetails = (props) => {

    const [ state ] = useContext(Context);

    useEffect(() => {
        console.log('ids',props.match.params.id, state.store.lang);
      if (props.match.params.id !== undefined) {
        state.actions.loadMovie(props.match.params.id, state.store.lang)
      }
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 
    
    function numberWithPoints(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

    function displayMovie(){
      
      if(state.store.active_movie !== undefined && parseInt(props.match.params.id) === state.store.active_movie.id) {
        // console.log(props.match.params.id, state.store.active_movie.id);
        return (
          <div className="moviedetails">
            <h2>{state.store.active_movie.title}</h2>
            <div className="detailcontainer">
              <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${state.store.active_movie.backdrop_path}`} alt={state.store.active_movie.title}/>
              <div className="text">
              {parseInt(state.store.active_movie.budget) !== 0 && <p><span>presupuesto:</span> <br/> <strong>{`$${numberWithPoints(parseInt(state.store.active_movie.budget))}`}</strong></p>}
              {parseInt(state.store.active_movie.revenue) !== 0 && <p><span>ganancia:</span> <br/> <strong>{`$${numberWithPoints(state.store.active_movie.revenue)}`}</strong></p>}
              <p><span>Popularidad:</span> <br/> <strong>{`${state.store.active_movie.popularity} expectadores`}</strong></p>
              <p><span>Resumen:</span> <br/>{state.store.active_movie.overview}</p>
              <a href={state.store.active_movie.homepage} target="_blank" rel="noopener noreferrer">Sitio web</a>
            </div>
            </div>

            
          </div>
        )
      }
        
      
    }
        return (
            <div>
               <Header/>
         <Container>
                {displayMovie()}
                
                { console.log(state)}
                </Container>
            </div>
        )
    
}

export default MovieDetails;

