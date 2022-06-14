import { useAppDispatch } from '../../state/Store'
import { postProduct, productType } from '../../state/slice/productSlice';
import { useSelector } from 'react-redux'
import { selectProviderState } from '../../state/slice/providerSlice'
import { useState } from 'react';
import createProductAction from '../../actions/product/createProductAction';

interface IFormProductPostProps {
}

const FormProductPost: React.FunctionComponent<IFormProductPostProps> = (props) => {
  const [productName, setProductName] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [minQuantity, setMinQuantity] = useState('')
  const [maxQuantity, setMaxQuantity] = useState('')
  const [availableUnits, setAvailableUnits] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [providerId, setProviderId] = useState('')
  const providerState = useSelector(selectProviderState())

  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (minQuantity >= maxQuantity) {
      alert("The min quantity have to be minor than the max quantity")
      setProductName('')
      setProductDescription('')
      setMinQuantity('')
      setMaxQuantity('')
      setAvailableUnits('')
      setProductPrice('')
      setProviderId('')
    } else if (availableUnits > maxQuantity) {
      alert("The product quantity have to be minor or equal than the max quantity")
      setProductName('')
      setProductDescription('')
      setMinQuantity('')
      setMaxQuantity('')
      setAvailableUnits('')
      setProductPrice('')
      setProviderId('')
    }

    else if (productName && productDescription && availableUnits && productPrice && minQuantity && maxQuantity && providerId) {
      const newProduct: productType = { productName, productDescription, availableUnits, productPrice, minQuantity, maxQuantity, providerId }
      dispatch(postProduct(newProduct))
      setProductName('')
      setProductDescription('')
      setMinQuantity('')
      setMaxQuantity('')
      setAvailableUnits('')
      setProductPrice('')
      setProviderId('')
    }
  }

  const saveProductForm = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    createProductAction(productName, productDescription, parseInt(minQuantity), parseInt(maxQuantity), parseInt(availableUnits), parseInt(productPrice), providerId)
    setProductName('')
    setProductDescription('')
    setMinQuantity('')
    setMaxQuantity('')
    setAvailableUnits('')
    setProductPrice('')
    setProviderId('')
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className=''>
      <div className=''><h1 className=''>Add New Product</h1></div>
      <table className=''>
        <thead className=''>
          <tr>
            <th className=''>Product Name</th>
            <th className=''>Description</th>
            <th className=''>Price</th>
            <th className=''>Quantity</th>
            <th className=''>Min Quantity</th>
            <th className=''>Max Quantity</th>
            <th className=''>Provider</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" className='' value={productName} onChange={e => setProductName(e.target.value)} /></td>
            <td><input type="text" className='' value={productDescription} onChange={e => setProductDescription(e.target.value)} /></td>
            <td><input type="number" className='' value={productPrice} onChange={e => setProductPrice((e.target.value))} min='1' /></td>
            <td><input type="number" className='' value={availableUnits} onChange={e => setAvailableUnits((e.target.value))} min='0' /></td>
            <td><input type="number" className='' value={minQuantity} onChange={e => setMinQuantity((e.target.value))} min='0' /></td>
            <td><input type="number" className='' value={maxQuantity} onChange={e => setMaxQuantity((e.target.value))} min='0' /></td>
            <td><input type="string" className='' value={providerId} onChange={e=>setProviderId(e.target.value)}/></td>
            <select name="" id="" className='' onChange={e => setProviderId(e.target.value)}>
              {<option disabled selected>Choose Provider</option>}
              {providerState.map((provider) => provider.availability ? <option key={provider.providerId} value={provider.providerId}>
                {provider.providerName}
              </option> : <></>)}
            </select>
          </tr>
        </tbody>
      </table>
      <div>
        <button type='submit' onClick={(e) => saveProductForm(e)} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Add Product</button>
      </div>

    </form>
  );
};

export default FormProductPost;
