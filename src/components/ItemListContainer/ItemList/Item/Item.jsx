import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
  return (
    <div className='col'>
      <Card className='h-100'>
        <Card.Img variant="top" src={`../${product.imagen}`} height={"400px"}/>
        <Card.Body>
          <Card.Title>{product.serie} - {product.tomo}</Card.Title>
          <Card.Text>
            ${product.precio}
          </Card.Text>
          <Button variant="primary">Comprar</Button>
          <Link to={`/details/${product.id}`}>
            <Button className='ms-1' variant="outline-primary">Detalles</Button>
          </Link>
        </Card.Body>
      </Card> 
    </div> 
  )
}

export default Item