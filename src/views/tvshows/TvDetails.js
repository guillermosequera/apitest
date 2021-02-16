import React, { useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Context } from "@store/appContext";
import Header from '@lay/Header';
import './TvDetails.sass';


const TvDetails = (props) => {

    const [ state ] = useContext(Context);

    useEffect(() => {
        console.log('ids',props.match.params.id, state.store.lang);
      if (props.match.params.id !== undefined) {
        state.actions.loadTv(props.match.params.id, state.store.lang)
      }
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 
    
    function numberWithPoints(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

    function displayTv(){
      
      if(state.store.active_tv !== undefined && parseInt(props.match.params.id) === state.store.active_tv.id) {
        // console.log(props.match.params.id, state.store.active_tv.id);
        return (
          <div className="moviedetails">
            <h2>{state.store.active_tv.original_name}</h2>
            <div className="detailcontainer">
              <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${state.store.active_tv.backdrop_path}`} alt={state.store.active_tv.original_name}/>
              <div className="text">
              <p><span>temporadas:</span> <br/> <strong>{state.store.active_tv.number_of_seasons}</strong></p>
              <p><span>episodios:</span> <br/> <strong>{state.store.active_tv.number_of_episodes}</strong></p>
              <p><span>Popularidad:</span> <br/> <strong>{`${state.store.active_tv.popularity} expectadores`}</strong></p>
              <p><span>Resumen:</span> <br/>{state.store.active_tv.overview}</p>
              <p><span>Estado:</span> <br/>{state.store.active_tv.status}</p>
              <a href={state.store.active_tv.homepage} target="_blank" rel="noopener noreferrer">Sitio web</a>

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
                {displayTv()}
                
                { console.log(state)}
                </Container>
            </div>
        )
    
}

export default TvDetails;

