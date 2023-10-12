import { useCartContext } from "../context/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import Carrito from '/assets/carrito.png'
import { Link, useAsyncError } from "react-router-dom"
import CartContainerItemListContainer from "./CartContainerItemListContainer/CartContainerItemListContainer"
import CartContainerSummary from "./CartContainerSummary/CartContainerSummary"
import { useEffect, useState } from "react"
import Swal from 'sweetalert2'

const CartContainer = () => {
  const { cartList, totalPriceProds, countProds, deleteCart } = useCartContext()
  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const [id, setID] = useState()

  const handleOnChange = (evt) => {
    setDataForm({
      ...dataForm,
      [evt.target.name] : evt.target.value
    })
  }

  const handleAddOrder = async (evt) => {
    evt.preventDefault()
    if(dataForm.name == '' || dataForm.phone == '' || dataForm.email == ''){
      Swal.fire({
        title: 'Error!',
        text: 'No se pueden dejar las casillas en blanco',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    }
    else if(evt.target.email.value != evt.target.email2.value){
      Swal.fire({
        title: 'Error!',
        text: 'Los emails no coinciden',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    }
    else {
      const order = {}
      order.buyer = {
        name: dataForm.name,
        phone: dataForm.phone,
        email: dataForm.email
      }
      order.products = cartList.map(prod => {
        return {id: prod.id, name: prod.serie + ' ' + prod.tomo, price: prod.precio, quantity: prod.quantity}
      })
      order.total = totalPriceProds
  
      const queryDB = getFirestore()
      const ordersCollection = collection(queryDB, 'orders')
      addDoc(ordersCollection, order)
      .then(({id}) => setID(id))
      .catch(err => console.log(err))
      .finally(() => {
        setDataForm({
          name: '',
          phone: '',
          email: ''
        })
        deleteCart()     
      })
    }
  }
  useEffect(()=>{
    if (id && id !== ''){
      Swal.fire({
        title: 'Compra registrada!',
        text: `Orden de compra: ${id}`,
        icon: 'info',
        confirmButtonText: 'Aceptar'
      })
    }
  },[id])

  return (
    <>
      { cartList.length != 0 ? 
        <>
          <div className="container mt-5">
            <section>  
              <div className="row d-flex">
                <div className="col-9">
                  <div className="card px-3 pb-3 bg-light pt-3" id="tablaCarrito">
                    <CartContainerItemListContainer cartList={cartList} />
                    <button onClick={deleteCart} className="btn btn-danger">Vaciar Carrito</button>
                  </div> 
                </div>
                <div className="col-3">
                  <div className="card px-3 py-2 bg-light">
                    <CartContainerSummary cartListLength={cartList.length} handleAddOrder={handleAddOrder}/>
                  </div> 
                </div>
              </div>
            </section>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-9">
                <h2 className="text-center mt-5">Datos de contacto</h2>
                <form className="form mt-3" onSubmit={handleAddOrder}>
                  <input type="text" name="name" placeholder="Ingresar el nombre" className="form-control my-3" value={dataForm.name} onChange={handleOnChange}/>
                  <input type="text" name="phone" placeholder="Ingresar el telefono" className="form-control my-3" value={dataForm.phone} onChange={handleOnChange}/>
                  <input type="text" name="email" placeholder="Ingresar el email" className="form-control my-3" value={dataForm.email} onChange={handleOnChange}/>
                  <input type="text" name="email2" placeholder="Ingresar el email" className="form-control my-3" onChange={handleOnChange}/>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-primary d-block mt-2 mb-3">Terminar compra</button>
                  </div>
                </form> 
              </div>
            </div>
          </div>
        </> 
      : 
        <>
          <div className="container mt-5">
            <section>  
              <div className="row d-flex">
                <div className="col-9">
                  <div className="card px-3 pb-3 bg-light pt-3">
                    <div className="d-flex justify-content-center mt-5">
                      <img className="d-flex justify-content-center" src={Carrito} height="64px" width="64px"/>
                    </div>
                    <h2 className="text-center mt-3">¡Parece que no tienes nada en el carrito!</h2>
                    <p className="text-center">¡Empieza a agregar productos para tener envio gratis!</p>
                    <p className="text-center mb-5">Agrega mas de 10 productos para tener envio <b>GRATIS</b></p>
                    <div className="d-flex justify-content-center pb-5">
                      <Link style={{ textDecoration: "none" }} to={"/"} className="btn btn-primary">Volver a la tienda</Link> 
                    </div>
                    <hr className="dropdown-divider"/>
                  </div> 
                </div>
                <div className="col-3">
                  <div className="card px-3 py-4 bg-light">
                    <CartContainerSummary cartListLength={cartList.length} countProds={countProds} totalPriceProds={totalPriceProds}/>
                  </div> 
                </div>
              </div>
            </section>
          </div>
        </>
      }
    </>
  )
}

export default CartContainer