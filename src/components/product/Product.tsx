import * as React from 'react';
import { productType, deleteProductAction } from '../../state/slice/productSlice';
import { useSelector } from 'react-redux';
import { selectProviderState } from '../../state/slice/providerSlice'; 
import { useAppDispatch } from '../../state/Store';

interface IProductProps {
    product: productType
}

const Product: React.FunctionComponent<IProductProps> = ({product}) => {
  const providerState = useSelector(selectProviderState())
  const provider = providerState.filter(provider => provider.providerId === product.providerId)[0];
  const providersName = provider.providerName;
  const dispatch = useAppDispatch()


  const [editState, setEditState] = React.useState(false);
  const [editName, setEditName] = React.useState(product.productName);
  const [editDescription, setEditDescription] = React.useState(product.productDescription);
  const [editPrice, setEditPrice] = React.useState(product.productPrice);
  const [editQuantity, setEditQuantity] = React.useState(product.availableUnits);
  const [editMin, setEditMin] = React.useState(product.minQuantity);
  const [editMax, setEditMax] = React.useState(product.maxQuantity);
  const [editProvider, setEditProvider] = React.useState(product.providerId);

  const commitProductEdition = async(product: productType) => {
    if (editQuantity > editMax){
      alert("the quantity has to be minor than max quantity")
      setEditState(false)
      setEditName(product.productName);
      setEditDescription(product.productDescription);
      setEditMin(product.minQuantity);
      setEditMax(product.maxQuantity);
      setEditQuantity(product.availableUnits);
      setEditPrice(product.productPrice);
      setEditProvider(product.providerId);
    } else if(editName && editDescription && editQuantity && editPrice && editMin && editMax && editProvider){
      const editedProduct: productType = { productId: product.productId, 
      productName: editName,
      productDescription: editDescription,
      minQuantity: editMin,
      maxQuantity: editMax,
      availableUnits: editQuantity,
      productPrice: editPrice,
      providerId: editProvider}
      setEditState(false)
    }
  }

  const deleteProd = async(product: productType) => {
    dispatch(deleteProductAction(product));
  }

  return (
    <>
      {editState === false?
    <tr className={product.availableUnits < product.minQuantity? '':''}>
      <td className=''>{product.productName}</td>
      <td className=''>{product.productDescription}</td>
      <td className=''>{product.minQuantity}</td>
      <td className=''>{product.maxQuantity}</td>
      <td className=''>{product.productPrice}</td>
      <td className=''>{product.availableUnits}</td>
      <td className=''>{providersName}</td>
      <td className=' '><button className='' onClick={e => setEditState(true)}>Edit</button></td>
      <td className=' '><button className='' onClick={() => deleteProd(product)}>Delete</button></td>
    </tr>
      :
    <tr>
    <td><input type="text"  value={editName} onChange={e=>setEditName(e.target.value)}/></td>
    <td><input type="text" value={editDescription} onChange={e=>setEditDescription(e.target.value)}/></td>
    <td><input type="number" value={editPrice} onChange={e=>setEditPrice((e.target.value))} min='1'/></td>
    <td><input type="number" value={editQuantity} onChange={e=>setEditQuantity((e.target.value))} min='0'/></td>
    <td><input type="number" value={editMin} onChange={e=>setEditMin((e.target.value))} min='0'/></td>
    <td><input type="number" value={editMax} onChange={e=>setEditMax((e.target.value))} min='0'/></td>
    <td>
    <select name="" id="" className='' value={editProvider}  onChange={e=>setEditProvider(e.target.value)}>
                  {providerState.map((provider) => provider.availability?<option key={provider.providerId} value = {provider.providerId}>
                    {provider.providerName}
                  </option>:<></>)}
                </select>
    </td>
    <td className=''><button className='' onClick={() => commitProductEdition(product)}>Save</button></td>
    </tr> 
    }
    </>)
};

export default Product;
