import { ProviderId } from 'firebase/auth';
import * as React from 'react';
import { receiptType } from '../../state/slice/receiptSlice';
import {useSelector} from 'react-redux';
import {selectProviderState} from '../../state/slice/providerSlice';
import { selectProductState } from '../../state/slice/productSlice';

interface IReceiptProps {
  receipt: receiptType;
}


const Receipt: React.FunctionComponent<IReceiptProps> = ({receipt}) => {
  const providerState = useSelector(selectProviderState())
  const productState = useSelector(selectProductState())

  return (
    <tr>
      <td><p className=''>{receipt.receiptDate}</p></td>
      <td><p>{receipt.providerId}</p></td>
      <td><p>{providerState.filter(provider => provider.providerId === receipt.providerId)[0].providerName}</p></td>
      <td><p>{receipt.receiptProductId}</p></td>
      <td><p>{productState.filter(product => product.productId === receipt.receiptProductId)[0].productName}</p></td>
      <td><p>{receipt.productQuantity}</p></td>
    </tr>
  );
};

export default Receipt;
