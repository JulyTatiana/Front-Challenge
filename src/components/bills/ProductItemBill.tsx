import * as React from 'react';
import { productType } from '../../state/slice/productSlice';
import {useAppDispatch} from '../../state/Store';
import { productToBill, selectBillProducts } from '../../state/slice/productSlice'
import { useSelector} from 'react-redux';

interface IProductItemBillProps {
    product: productType
}

const ProductItemBill: React.FunctionComponent<IProductItemBillProps> = ({product}) => {
    const dispatch = useAppDispatch();
    const productState = useSelector(selectBillProducts())
    

    const updateQuantityHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const itemPrice = Number(product.productPrice) * Number(e.target.value)
        const billProduct = {productName: product.productName, quantity: Number(e.target.value), price:itemPrice}

            dispatch(productToBill(billProduct))
    }

  return (
    <tr>
        <td className=''>
            {product.productName}
        </td>
        <td>
            <input type="number" defaultValue='0' className='' onChange={e=> updateQuantityHandler(e)} min='0' max={product.availableUnits}/>
        </td>
        <td>
            {product.availableUnits}
        </td>
        <td>
            {product.productPrice}
        </td>
    </tr>

  );
};

export default ProductItemBill;
