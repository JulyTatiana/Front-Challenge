import * as React from 'react';
import FormProductPost from '../../components/product/FormProductPost';
import ProductList from '../../components/product/ProductList';

interface IInventoryProps {
}

const Inventory: React.FunctionComponent<IInventoryProps> = (props) => {
  return <div className='flex flex-col justify-center sm:content-center overflow-x-auto shadow-md  mt-10'>
    <ProductList/>
    <FormProductPost/>
  </div>;
};

export default Inventory;
