import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Center } from '@chakra-ui/react';
import ItemList from './ItemList';
import Loader from './Loader';
import { collection, getDocs, getFirestore } from 'firebase/firestore';


const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore()

    const ItemsCollection = collection(db, 'SILLAS');
    getDocs(ItemsCollection)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(docs);
        setLoading(false);
      })
  }, []);

  let filteredProducts = products;

  if (category && category !== 'all') {
    filteredProducts = products.filter((product) => product.category === category);
  }

  return (
    <Center>
      {loading ? <Loader /> : <ItemList products={filteredProducts} />}
    </Center>
  );
};

export default ItemListContainer;

