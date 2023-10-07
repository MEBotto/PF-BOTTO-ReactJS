import { ItemCount } from "../../Counter/ItemCount"
import { useCartContext } from "../../context/CartContext"

const ItemDetail = ({product}) => {
  const { addProduct } = useCartContext()
  const onAdd = (quantity) => {
    addProduct({ ...product, quantity })
  }
  
  return (
    <div className="container my-4">
      <div className="card p-3">
        <div className="row">
          <div className="col-1 d-flex align-items-center">
            <img src={product.imagen} alt="foto portada" width="64px"/>
          </div>
          <div className="col-3 mt-2">
            <div className="row ">
              <h3 className="text-center">{product.serie} {product.tomo}</h3>
            </div>
            <div className="row">
              <h3 className="text-center">{product.autor}</h3>
            </div>
          </div>
          <ItemCount initial={1} stock={product.stock} onAdd={onAdd} price={product.precio}/>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail