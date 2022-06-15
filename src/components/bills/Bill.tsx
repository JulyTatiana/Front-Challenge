import * as React from 'react';
import { billType } from '../../state/slice/billSlice';
import { useSelector} from 'react-redux';
import {selectProductState} from '../../state/slice/productSlice';
import BillProductRow from './BillProduct';

interface IBillProps {
  bill:billType
}

const Bill: React.FunctionComponent<IBillProps> = ({bill}) => {
  const productState = useSelector(selectProductState());

  return (
    <div className=''>
      <div className=''>
      <ul >
        <li className=''>Bill ID: {bill.billId}</li>
        <li className=''>Bill Date: {bill.billDate}</li>
        <li className=''>Client Name: {bill.client}</li>
        <li className=''>Seller Name: {bill.seller} </li>
        <li className=''>Total Paid: {bill.totalPaid} </li>
        {/* <li className=''>Product Id: {bill.productId} </li> */}
      </ul>
      <table className=''>
        <thead className=''>
          <th>Product</th>
          <th>Quantity</th>
        </thead>
        <tbody>
          {Object.entries(bill.productId).map(entry => <BillProductRow key={bill.billId} entry={entry}/>)}
          <tr>
            <td>
              Total paid: {bill.totalPaid}
            </td>
          </tr>
        </tbody>
      </table>

      </div>
    </div>
  );
};

export default Bill;
