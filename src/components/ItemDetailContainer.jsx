import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail'
import { useShoppingCart } from '../context/ShoppingCartContext';
import Loader from './Loader';
import { Center } from '@chakra-ui/react';


const ItemDetailContainer = () => {

  const { addToCart } = useShoppingCart (); 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const productsData  = [

    { id:1, name:"Silla Falcon", category:"textiles", price:12000, stock:12, description:"La Silla Falcon es una pieza de mobiliario elegante y duradera. Fabricada con madera de alta calidad, esta silla combina comodidad y estilo. Su diseño ergonómico proporciona un soporte óptimo para la espalda, y su acabado en barniz resalta la belleza natural de la madera. Ya sea para su uso en el comedor o en el escritorio, la Silla Falcon es la elección perfecta para agregar un toque de distinción a cualquier espacio.", src:"/public/needoarticulosilla1.jpg"},

    { id:3, name:"Silla Barinas", category:"madera", price:13600, stock:10, description:"La Silla Barinas es una opción moderna y resistente para espacios contemporáneos. Su estructura de acero recubierto en pintura electrostática ofrece durabilidad y estabilidad. El diseño minimalista de líneas limpias se combina con un asiento ergonómico y cómodo tapizado en tela de alta calidad. Perfecta para agregar un toque de sofisticación a tu hogar u oficina.", src:"/public/needoarticulosilla3.jpg"},

    { id:4, name:"Silla Aragua", category:"madera", price:15400, stock:13, description:"La Silla Aragua es una fusión perfecta entre diseño contemporáneo y tradicional. Fabricada en madera de pino seleccionada, esta silla presenta un acabado en tonos cálidos que realzan la belleza de la madera. Su respaldo curvado ofrece un soporte excepcional para la espalda, mientras que el asiento tapizado en lino natural proporciona comodidad y estilo.", src:"/public/needoarticulosilla4.jpg"},

    { id:5, name:"Silla Lara", category:"metal", price:13599, stock:15, description:"La Silla Lara es la combinación perfecta de funcionalidad y diseño industrial. Con una estructura de acero resistente y un asiento de metal perforado, esta silla agrega un toque contemporáneo a cualquier espacio. El acabado en pintura en polvo protege contra el desgaste y agrega un aspecto moderno. Ideal para espacios exteriores e interiores de estilo urbano.", src:"/public/needoarticulosilla5.jpg"},

    { id:6, name:"Silla BKF", category:"metal", price:35000, stock:5, description:"La Silla BKF es un ícono del diseño moderno. Inspirada en la silla 'Butterfly' de 1938, esta silla combina forma y función de manera elegante. El marco de acero lacado y la cubierta de cuero premium le dan un aspecto sofisticado y duradero. Su diseño plegable la hace versátil y fácil de almacenar.", src:"/public/needoarticulosilla6.jpg"},
    
    { id:7, name:"Silla Eames", category:"madera", price:13999, stock:3, description:"La Silla Eames es un clásico del diseño moderno. Diseñada por Charles y Ray Eames en 1950, esta silla combina elegancia y comodidad. Su asiento moldeado de plástico y su base de patas cruzadas de metal la hacen icónica. Disponible en una variedad de colores, es perfecta para cualquier ambiente.", src:"/public/needoarticulosilla7.jpg"},

    { id:8, name:"Silla Sucre", category:"madera", price:14750, stock:5, description:"La Silla Sucre es un homenaje a la elegancia clásica. Fabricada en madera de roble sólida y con un acabado en tonos oscuros, esta silla refleja un estilo atemporal. Su respaldo tallado a mano y su asiento acolchado en cuero genuino brindan comodidad y sofisticación. Perfecta para espacios formales y refinados.", src:"/public/needoarticulosilla8.jpg"},

    { id:9, name:"Silla Merida", category:"textiles", price:17800, stock:8, description:"La Silla Mérida combina la estética rústica con la comodidad moderna. Hecha a mano con madera de pino reciclada, cada silla es única en su acabado y textura. El respaldo de estilo artesanal y el asiento acolchado con tejido de yute natural crean un ambiente acogedor y cálido. Perfecta para espacios campestres y casuales.", src:"/public/needoarticulosilla9.jpg"},

    { id:10, name:"Silla Tachira", category:"textiles", price:13450, stock:11, description:"La Silla Táchira es una pieza versátil que combina la elegancia y la funcionalidad. Elaborada con madera de pino y acabados en tonos claros, esta silla es ideal para espacios modernos y minimalistas. Su diseño ergonómico y su asiento acolchado brindan comodidad durante largos periodos de tiempo. Perfecta para áreas de trabajo y salas de estudio.", src:"/public/needoarticulosilla10.jpg"},

    { id:11, name:"Silla Caracas", category:"madera", price:19500, stock:2, description:"La Silla Caracas es un icono de la elegancia urbana. Fabricada en madera de nogal y con detalles de latón en las patas, esta silla es un reflejo de la sofisticación moderna. Su respaldo curvado y su asiento tapizado en cuero genuino ofrecen una experiencia de lujo. Perfecta para comedores y espacios de entretenimiento.", src:"/public/needoarticulosilla11.jpg"},

    { id:12, name:"Silla Esparta", category:"metal", price:14900, stock:9, description:"La Silla Esparta es una mezcla de elegancia y comodidad. Con un diseño contemporáneo y líneas limpias, esta silla se adapta a una variedad de estilos de decoración. Su asiento y respaldo acolchados con tela de alta calidad brindan un confort excepcional. Perfecta para salas de estar y áreas de conversación.", src:"/public/needoarticulosilla12.jpg"},

    { id:13, name:"Silla Guyana", category:"madera", price:21500, stock:12, description:"La Silla Guyana es un homenaje a la naturaleza y la artesanía. Hecha a mano con madera de cedro y detalles tallados inspirados en la flora tropical de la región, esta silla es una obra de arte funcional. Su asiento tapizado en algodón natural y su respaldo curvado hacen que sea una pieza única y cómoda. Ideal para ambientes rústicos y bohemios.", src:"/public/needoarticulosilla13.jpeg"},

    { id:14, name:"Silla Cristobal", category:"textiles", price:19500, stock:15, description:"La Silla San Cristóbal es sinónimo de calidez y confort. Con un diseño clásico y atemporal, esta silla se adapta a diferentes estilos de decoración. Su tapizado de tela de lino en tonos neutros y su estructura de madera maciza brindan una sensación acogedora. Perfecta para comedores familiares y espacios de reunión.", src:"/public/needoarticulosilla14.jpg"},

    { id:15, name:"Silla Monagas", category:"textiles", price:26500, stock:16, description:"La Silla Monagas es una fusión de estilo y funcionalidad. Diseñada con líneas modernas y detalles metálicos en las patas, esta silla añade un toque contemporáneo a cualquier espacio. Su asiento y respaldo tapizados en terciopelo de alta calidad proporcionan un confort excepcional. Ideal para espacios vanguardistas y elegantes.", src:"/public/needoarticulosilla15.jpg"},

    { id:2, name:"Silla Zulia", category:"textiles", price:11300, stock:12, description:"La Silla Zulia es una combinación de tradición y modernidad. Fabricada con madera de roble y líneas limpias, esta silla es versátil y resistente. Su respaldo curvado y su asiento ergonómico ofrecen un gran confort. Perfecta para cualquier rincón del hogar, desde el comedor hasta la terraza.", src:"/public/needoarticulosilla2.jpg"},

  ];

  setTimeout(() => {
    setProducts(productsData);
    setLoading(false);
  }, 1500);
}, []);



return (
  <Center>
    {loading ? (
      <Loader />
    ) : (
      <ItemDetail products={products} />
    )}
  </Center>
);
};

export default ItemDetailContainer;
