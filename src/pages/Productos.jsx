import {Card,Button,Col, Row} from "react-bootstrap"

export default function Productos()
{
    const productos=[
        {id:1,nombre:"Producto 1",img:"https://placehold.co/300x200,precio",precio:"$100"},
        {id:2,nombre:"Producto 2",img:"https://placehold.co/300x200,precio",precio:"$200"},
        {id:3,nombre:"Producto 3",img:"https://placehold.co/300x200,precio",precio:"$300"},
        {id:4,nombre:"Producto 4",img:"https://placehold.co/300x200,precio",precio:"$400"},
    ];
    return(
                <div ClassName="mt-4">
                    <h2 className="mb-4">Seccion de Productos</h2>
                    <Row>
                        {productos.map((prod)=>
                        (
                            <Col key={prod.id} md={3}>
                                <Card className="mb-4 shadow-sm">
                                    <Card.Img variant="top" src={prod.img}  />
                                    <Card.Body>
                                        <Card.Title>{prod.nombre}</Card.Title>
                                        <Card.Text>{prod.precio}</Card.Text>
                                        <Button variant="primary">Agregar</Button>
                                    </Card.Body>
                                    <card className="body"></card>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            );
}