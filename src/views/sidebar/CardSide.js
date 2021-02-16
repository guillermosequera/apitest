import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';


const CardSide = ( { title }) => {

    return (
        <Card className="mt-3">
        <ListGroup variant="flush">
            <ListGroup.Item>
                <div>
                    <h5> { title }</h5>
                    <ul className="pl-0 list-unstyled">
                        <li  className="my-2">
                            <Image src="https://image.tmdb.org/t/p/w600_and_h900_bestv2//A7hhUj9Fq6E6FhGsENJTCmnCmt4.jpg" roundedCircle style={{ height: '40px', width: '40px', }}/>
                            <p className="ml-3 d-inline-block" >Pelicula 1</p>
                        </li>
                    
                    </ul>
                </div>
            </ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
    </Card>
    )
}

export default CardSide;