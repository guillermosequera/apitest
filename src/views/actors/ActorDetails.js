import React, { useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { Context } from "@store/appContext";
import Header from '@lay/Header';
import './ActorDetails.sass';


const ActorDetails = (props) => {

    const [ state ] = useContext(Context);

    useEffect(() => {
        console.log('ids',props.match.params.id, state.store.lang);
      if (props.match.params.id !== undefined) {
        state.actions.loadActor(props.match.params.id, state.store.lang)
      }
    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 
    
   

    function displayTv(){
      
      if(state.store.active_people !== undefined && parseInt(props.match.params.id) === state.store.active_people.id) {
        // console.log(props.match.params.id, state.store.active_people.id);
        return (
          <div className="moviedetails">
            <h2>{state.store.active_people.name}</h2>
            <div className="detailcontainer">
              <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${state.store.active_people.profile_path}`} alt={state.store.active_people.name}/>
              <div className="text">
              <p><span>Fecha nacimiento:</span> <br/> <strong>{`${state.store.active_people.birthday} `}</strong></p>
              <p><span>Lugar nacimiento:</span> <br/> <strong>{`${state.store.active_people.place_of_birth} `}</strong></p>
              <div><span>Conocid@ por:</span> <br/>
                <ul>
                {
                    state.store.active_people.also_known_as.map((role, key) => (
                            <li key={key}>{role}</li>
                    ))
                }
                </ul>
               <strong></strong>

                  </div>
              <p><span>Popularidad:</span> <br/> <strong>{`${state.store.active_people.popularity}`}</strong></p>
              
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


export default ActorDetails;

