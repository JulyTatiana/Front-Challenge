import * as React from 'react';
import { useAppDispatch } from '../../state/Store'
import { useSelector } from 'react-redux'
import {getAllProducts, selectProductFetchError, selectProductState, selectProductStatus, productFetchStatus} from '../../state/slice/productSlice'
import Product from "./Product"

interface IProductListProps {
}

const ProductList: React.FunctionComponent<IProductListProps> = (props) => {

  const error = useSelector(selectProductFetchError())
  const status = useSelector(selectProductStatus())
  const productState = useSelector(selectProductState())
  const dispatch = useAppDispatch();
  const products = productState.map(product => product)
  console.log(products)

    React.useEffect(() => {
        if (status === productFetchStatus.IDLE) {
        dispatch(getAllProducts())
    }
    }, [dispatch])
    return (
        <table className=''>
        <thead className=''>
          <tr>
            <th className=''>Product Name</th>
            <th className=''>Product's Description</th>
            <th className=''>Min Quantity</th>
            <th className=''>Max Quantity</th>
            <th className=''>Available Units</th>
            <th className=''>Product's price</th>
            <th className=''>Provider Id</th>
            <th className=''>Edit</th>
            <th className=''>Delete</th>

          </tr>
        </thead>
        <tbody>
          {!error && productState.map((product) => <Product key={product.productId} product={product} />)}
        </tbody>
      </table>
    )
};

export default ProductList;
