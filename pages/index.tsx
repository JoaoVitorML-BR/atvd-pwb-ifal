import React from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Geladeira Electrolux',
    description: 'Geladeira eloctrolux frost free 500L',
    price: 3000,
    image: '/images/geladeira.png',
  },
  {
    id: 2,
    name: 'Frigideira',
    description: 'Frigideira antiaderente',
    price: 50,
    image: '/images/frigideira.png',
  },
  {
    id: 3,
    name: 'Notebook Gamer Acer',
    description: 'Notebook Gamer Acer Nitro 5',
    price: 5000,
    image: '/images/notebook.png',
  },
  {
    id: 4,
    name: 'Placa de video RTX 3060',
    description: 'Placa de video RTX 3060',
    price: 2000,
    image: '/images/gpu.png',
  },
  {
    id: 5,
    name: 'Bicicleta Mountain Bike',
    description: 'Bicicleta Mountain Bike 21 marchas',
    price: 800,
    image: '/images/bicicleta.png',
  },
];

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Catalado de Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;