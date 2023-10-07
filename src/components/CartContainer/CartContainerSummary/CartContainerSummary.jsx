import { useCartContext } from "../../context/CartContext"

const CartContainerSummary = ({ cartListLength, handleAddOrder }) => {
  const { totalPriceProds, countProds, deleteCart } = useCartContext()
  const envio = (totalPriceProds) * 0.1

  return (  
    <>
      { cartListLength != 0 ?
        <>
          <h4 className="text-center">Resumen de Compra</h4>
          <hr className="dropdown-divider"/>
          <div>
            <div className="row">
              <div className="col-5">
                <p>Productos({countProds})</p>
              </div>
              <div className="offset-2 col-5">
                <p>${totalPriceProds}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <p>Envío</p>
              </div>
              <div className="offset-2 col-5">
                <p>${envio}</p>
              </div>
            </div>
            <hr className="dropdown-divider"/>
            <div className="row">
              <div className="col-5">
                <p style={{fontWeight: "bolder"}}>Total</p>
              </div>
              <div className="offset-2 col-5">
              <p style={{fontWeight: "bolder"}}>${envio + totalPriceProds}</p>
              </div>
            </div>
          </div>       
        </>

        :

        <>
          <h4 className="text-center">Resumen de Compra</h4>
          <hr className="dropdown-divider"/>
          <div>
            <p className="text-center mb-1">¡Aquí se mostrara el resumen de tu compra!</p>
          </div>
          <button className="btn btn-primary d-block mt-2 mb-3 disabled">Comprar</button>
        </>
      }
    </>
  )
}

export default CartContainerSummary