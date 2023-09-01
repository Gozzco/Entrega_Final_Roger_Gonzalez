import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Center } from '@chakra-ui/react';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Loader from './Loader';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const db = getFirestore();

    const oneItem = doc(db, "SILLAS", productId);
    getDoc(oneItem)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const docData = snapshot.data();
          setProduct(docData);
        }
      })
  }, [productId]);

  return (
    <Center>
      {product ? <ItemDetail product={product} /> : <Loader />}
    </Center>
  );
};

export default ItemDetailContainer;


