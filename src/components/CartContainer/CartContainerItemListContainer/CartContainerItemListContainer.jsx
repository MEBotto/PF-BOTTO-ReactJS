import CartContainerItemList from "./CartContainerItemList/CartContainerItemList"


const CartContainerItemListContainer = ({cartList}) => {
  return (
    <>
      {cartList.map(prod =>
        <CartContainerItemList prod={prod} key={prod.id}/>
      )}
    </>
  )
}

export default CartContainerItemListContainer