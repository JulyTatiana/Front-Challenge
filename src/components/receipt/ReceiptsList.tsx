import * as React from 'react';
import {useSelector, } from 'react-redux';
import { useAppDispatch } from '../../state/Store';
import { selectReceiptFetchError,  selectReceiptStatus, selectReceiptState, receiptFetchStatus, getAllReceipts} from '../../state/slice/receiptSlice';
import Receipt from './Receipt';

interface IReceiptsListProps {
}

const ReceiptsList: React.FunctionComponent<IReceiptsListProps> = ({}) => {
    const dispatch = useAppDispatch()

    const error = useSelector(selectReceiptFetchError())
    const status = useSelector(selectReceiptStatus())
    const receiptState = useSelector(selectReceiptState())



    React.useEffect(() => {
        if (status === receiptFetchStatus.IDLE) {
          dispatch(getAllReceipts())
        }
      }, [dispatch])
  return (
    <table className=''>
      <thead className=''>
        <tr>
            <th className=''>Provider ID</th>
            <th className=''>Date</th>
            <th className=''>Product's Units</th>
            <th className=''>Product ID</th>
        </tr>
      </thead>
      <tbody>
        {!error && receiptState.map((receipt) => <Receipt key={receipt.receiptId} receipt={receipt} />)}
      </tbody>
    </table>);
};

export default ReceiptsList;
