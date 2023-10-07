import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { mFetch } from '../utils/mockFetch'
import { useParams } from 'react-router-dom'
import { SyncLoader } from 'react-spinners';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState({})
  const {pid} = useParams()
  useEffect(()=>{
    const db = getFirestore()
    const queryDoc = doc(db, 'productos', pid)
    getDoc(queryDoc)
    .then(respuesta => ( { id: respuesta.id, ...respuesta.data() } ))
    .then(respuesta => setProduct(respuesta))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))
  }, [])

  return (
    <>
      { loading ? <div className='mt-5 d-flex justify-content-center'><SyncLoader color="rgba(255, 0, 0, 0.84)"/></div> : 
        <ItemDetail product={product}/> }
    </> 
  )
}

export default ItemDetailContainer