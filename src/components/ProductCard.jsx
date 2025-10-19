import React from "react";
import { Card, Button} from 'react-bootstrap';

const ProductCard = ({ product, agregarAlCarrito}) => {
    return (
        //ARMADO DE CARDS
        <Card className="h-100 d-flex flex-column">
            <Card.Img 
                variant="top" 
                src={product.image} 
                alt={product.title} 
                className="card-img-top img-fluid" 
                style={{height:'200px', objectFit:'cover'}}
            />



            <Card.Body className="d-flex flex-column">
                <Card.Title class="text-start"><strong>{product.title}</strong></Card.Title>
                <Card.Text class="text-start"> 
                    {product.description.slice(0,100)}...
                </Card.Text>
                <Card.Text>
                    <strong>${product.price}</strong>
                </Card.Text>
                <Button variant="primary" onClick={() => agregarAlCarrito(product)}>
                    Agregar al carrito
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;