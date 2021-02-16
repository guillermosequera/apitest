import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Context } from "@store/appContext";
import CardActors from '@views/actors/CardActors';
import Header from '@lay/Header';
import Paginate from '@lay/PageActor';


const Index = () => {

    const [{ store, setState }] = useContext(Context);

    return (

     <div>
         <Header/>
         <Container>
            <Paginate/>
            <Row> 
                <Col md={12}>
                    <Row>
                    { 
                    
                    store.peoples.map((people,index) => {
                            return (
                                <Col md={2} key={index}>
                                    <CardActors people={people} />
                                </Col>   
                            )
                    })
                    }
                    </Row>
                </Col>
                {/* <Col md={3}>
                    <Sidebar/>
                </Col> */}
            </Row>
            <Paginate/>
         </Container>
     </div>  

    )
}

export default Index;