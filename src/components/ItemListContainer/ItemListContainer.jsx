import { useEffect, useState } from 'react';
import { mFetch } from '../utils/mockFetch';
import ItemList from './ItemList/ItemList';
import { useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import { SyncLoader } from 'react-spinners';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const {sName} = useParams()

  useEffect(()=>{
    if(sName){
      const db = getFirestore()
      const queryCollection = collection(db, 'productos')
      const queryFilter = query(queryCollection, where('serie', '==', sName))
      getDocs(queryFilter)
      .then(respuesta => setProduct(respuesta.docs.map(prod => ( { id: prod.id, ...prod.data() } ))))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))

    }else{
      const db = getFirestore()
      const queryCollection = collection(db, 'productos')
      const queryFilter = query(queryCollection, orderBy('serie', 'asc'))
      getDocs(queryFilter)
      .then(respuesta => setProduct(respuesta.docs.map(prod => ( { id: prod.id, ...prod.data() } ))))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    }
  }, [sName])

  return (
    <div className='container mt-5'>
        { loading ? <div className='d-flex justify-content-center'><SyncLoader color="rgba(255, 0, 0, 0.84)"/></div> : 
        <div className="row row-cols-4 g-4"><ItemList products={products}/></div> }  
    </div>     
    );
}

export default ItemListContainer