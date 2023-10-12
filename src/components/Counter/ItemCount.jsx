import { useState } from "react"
import { Link } from "react-router-dom"

export const ItemCount = ({initial, stock, onAdd, price}) => {
  const[counter, setCounter] = useState(initial)
  const[showButton, setShowButton] = useState(false)

  const handleAdd = () => {
    if(counter < stock){
      setCounter(counter + 1)
    }
  }

  const handleSubstract = () => {
    if(counter > initial){
      setCounter(counter - 1)
    }
  }

  const handleOnAdd = () => {
    setShowButton(true)
    onAdd(counter)
  }

  return (
    <>
      <div className="col-1 d-flex align-items-center">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary" onClick={handleSubstract}>-</button>
          <label className="form-control">
            <strong>{ counter }</strong>
          </label>
          <button type="button" className="btn btn-primary" onClick={handleAdd}>+</button>
        </div>
      </div>
      <div className="col-2 mt-2">
        <div className="row">
          <h3 className="text-center">Subtotal</h3>
        </div>
        <div className="row">
          <h4 className="text-center">${price * counter}</h4>
        </div>
      </div>
      <div className="col-2 mt-2">
        <div className="row">
          <h3 className="text-center">Precio p/u</h3>
        </div>
        <div className="row">
          <h4 className="text-center">${price}</h4>
        </div>
      </div>
      <div className="col-2 d-flex align-items-center">
        {showButton ? 
          <Link className="btn btn-success" to={"/cart"}>Terminar compra</Link>
        :
          <button type="button" className="btn btn-primary" onClick={handleOnAdd}>Agregar al Carrito</button>
        }  
      </div>
    </>
    
    
  )
}
