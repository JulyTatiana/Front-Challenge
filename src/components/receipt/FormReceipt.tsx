import * as React from 'react';
import createReceiptAction from '../../actions/receipt/createReceiptAction';
import { useSelector } from 'react-redux'
import { selectProviderState } from '../../state/slice/providerSlice'
import { productType, selectProductState } from '../../state/slice/productSlice'
import { useAppDispatch } from '../../state/Store'
import { postReceipt, receiptType } from '../../state/slice/receiptSlice';
import * as moment from 'moment'

interface IFormReceiptPostProps {
}

const FormReceiptPost: React.FunctionComponent<IFormReceiptPostProps> = (props) => {
  const providerState = useSelector(selectProviderState());
  const productState = useSelector(selectProductState());

  const [providerId, setProviderId] = React.useState('')
  const [date, setDate] = React.useState('')
  const [productUnits, setProductUnits] = React.useState(0)
  const [productId, setProductId] = React.useState('')
  const dispatch = useAppDispatch();

  const generateReceipt = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const product = productState.filter(product => product.productId === productId)[0];
    if(product.availableUnits + productUnits > product.maxQuantity){
      alert("the product quantity should be greater than the maximum")
    } else if(productId && productUnits){
        const date = moment().format("DD-MM-YYYY");   
        const newReceipt: receiptType = {productQuantity: productUnits, receiptProductId: productId, receiptDate: date  ,providerId: product.providerId }
        dispatch(postReceipt(newReceipt))
    }
    setProductId('');
    setProductUnits(0);

  }

  const saveReceiptForm = (e:React.FormEvent<HTMLButtonElement> ) => {
    e.preventDefault() 
    createReceiptAction(providerId, date, productUnits, productId)
    setProviderId('')
    setDate('')
    setProductUnits(0)
    setProductId('')
  }

  return (<form onSubmit={(e) => generateReceipt(e)} className=''>
  <div className=''><h1 className=''>Create Receipt</h1></div>
  <table className=''>
      <thead className=''>
        <tr>
            <th className=''>Provider Id</th>
            <th className=''> date </th>
            <th className=''> productUnits </th>
            <th className=''> productId </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
        <select name="" id="" className=''  onChange={e=>setProductId(e.target.value)}>
          {<option disabled selected>Choose Product</option>}
          {productState.map((product) => <option key={product.productId} value={product.productId}>
            {product.productId}
          </option>)}
        </select>
          </td>
        
          <td>
            <input type="text" name="" id="" className='' value={productUnits} onChange={e=>setProductUnits(Number(e.target.value))}/>
          </td>

        </tr>
      </tbody>
    </table>
    <div className=''>
<button type='submit' className='' >Generate Receipt</button>
    </div>

</form>);
};

export default FormReceiptPost;
