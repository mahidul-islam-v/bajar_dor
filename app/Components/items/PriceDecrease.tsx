import React from 'react';
import ItemCard from './ItemCard';
import { IProduct } from '@/app/Interface/product';

const PriceDecrease = ({products}:{products:IProduct[]}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.filter( product => product.today < product.yesterday).map((product: IProduct) => (
        <ItemCard key={product.id} item={product}></ItemCard>
      ))}
    </div>
  );
};

export default PriceDecrease;