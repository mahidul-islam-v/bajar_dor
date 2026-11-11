import { IProduct } from '@/app/Interface/product';
import React from 'react';
import ItemCard from './ItemCard';

const AllProducts = ({products}:{products:IProduct[]}) => {
  
  return (
    <div className='grid grid-cols-3 gap-4'>
      {products.map((product: IProduct) => (
                  <ItemCard key={product.id} item={product}></ItemCard>
                ))}
    </div>
  );
};

export default AllProducts;