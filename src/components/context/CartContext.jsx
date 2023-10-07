import { createContext, useContext, useEffect, useState } from "react";
//Creacion de CartContext
export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([])
  const [countProds, setCountProds] = useState(0)
  const [totalPriceProds, setTotalPriceProds] = useState(0)

  const addProduct = (newProduct) => {
    //Logica para evitar duplicados
    const found = cartList.find(product => product.id === newProduct.id)
    if(found){
      found.quantity = found.quantity + newProduct.quantity
      setCartList([
        ...cartList     
      ])
    }
    else{
      setCartList([
        ...cartList,
        newProduct      
      ])
    }   
  }

  useEffect(()=>{
    totalQuantityProductsInCart()
    totalPrice()
  },[cartList])

  //Eliminar por producto
  const deleteProductInCartByID = (id) => {
    console.log(cartList)
    const newCartList = cartList.filter(product => product.id != id)
    console.log(newCartList)
    setCartList(
      newCartList
    )
  }
  //Mostrar la cantidad de productos total que tienen
  const totalQuantityProductsInCart = () => {
    let totalQuantity = 0
    for (const prod of cartList){
      totalQuantity = totalQuantity + prod.quantity
    }
    setCountProds(totalQuantity)
  }
  //Precio total
  const totalPrice = () => {
    let totalPrice = 0
    for (const prod of cartList){
      totalPrice = totalPrice + prod.quantity * prod.precio
    }
    setTotalPriceProds(totalPrice)
  }
  //Eliminar carrito
  const deleteCart = () => {
    setCartList([])
  }
  return (
    <CartContext.Provider value={{ cartList, addProduct, deleteProductInCartByID, countProds, deleteCart, totalPriceProds }}>
      {children}
    </CartContext.Provider>
  )
}


