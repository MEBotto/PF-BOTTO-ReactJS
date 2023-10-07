import Carrito from '/assets/carrito.png'
import Badge from "react-bootstrap/Badge";
import { useCartContext } from '../../context/CartContext';

const CartWidget = ({count, funcionOnClick}) => {
  const { countProds } = useCartContext()

  return (
    <>
      <div className="">
        <div className="position-relative">
          <img src={Carrito} alt="" width="32px"/>
          <Badge className="position-absolute top-0 start-100 translate-middle rounded-circle" bg="primary">{countProds}</Badge>
        </div>
      </div> 
    </>
  )
}

export default CartWidget