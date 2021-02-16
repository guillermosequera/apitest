import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Context } from "./../../store/appContext";
import CardMovie from './../movies/CardMovie';
import Header from './../../layouts/Header';
import Paginate from './../../layouts/PageMovie';



const Index = () => {

    const [ state ] = useContext(Context);
    console.log('store', state);

    return (

     <div>
         <Header/>
         <Container>
            <Paginate/>
            <Row> 
              

                <Col md={'12'}>
                    <Row>
                    { 
                        
                        state.store.movies.map((movie,index) => {
                            return (
                                <Col md={3} key={index}>
                                    <CardMovie movie={movie} />
                                </Col>   
                            )
                        })
                        
                    }
                    </Row>
                </Col>
            </Row>
            <Paginate/>
         </Container>
     </div>  

    )
}

export default Index;