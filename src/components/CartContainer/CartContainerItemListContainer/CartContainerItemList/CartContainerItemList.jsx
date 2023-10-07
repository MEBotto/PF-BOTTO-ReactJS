import { useCartContext } from "../../../context/CartContext"

const CartContainerItemList = ({ prod}) => {
  const { deleteProductInCartByID } = useCartContext()

  return (
    <>
      <div className="row my-3 border-bottom pb-3">
        <div className="col-1 d-flex align-items-center">
          <img src={prod.imagen} alt="foto portada" width="64px"/>
        </div>
        <div className="col-4">
          <div className="row ">
            <h3 className="text-center">{prod.serie} {prod.tomo}</h3>
          </div>
          <div className="row">
            <div className="d-flex justify-content-center">
              <button type="button" className="btn btn-danger" onClick={() => deleteProductInCartByID(prod.id)}>Eliminar</button>
            </div>
          </div>
        </div>
        {/* <div className="offset-1 col-2 d-flex align-items-center">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-primary">-</button>
            <label className="form-control" id="${prod.id}Label">{prod.quantity}</label>
            <button type="button" className="btn btn-primary">+</button>
          </div>
        </div> */}
        <div className="offset-1 col-2">
          <div className="row">
            <h3 className="text-center">Precio p/u</h3>
          </div>
          <div className="row">
            <h4 className="text-center">${prod.precio}</h4>
          </div>
        </div>
        <div className="offset-1 col-2">
          <div className="row">
            <h3 className="text-center">Subtotal</h3>
          </div>
          <div className="row">
            <h4 className="text-center" id="${prod.id}Subtotal">${prod.precio * prod.quantity}</h4>
          </div>
        </div>
      </div>
      <hr className="dropdown-divider"/>
    </>
  )
}

export default CartContainerItemList