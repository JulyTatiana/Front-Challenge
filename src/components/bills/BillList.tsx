import * as React from 'react';
import { useAppDispatch } from '../../state/Store';
import { useSelector } from 'react-redux';
import {selectBillFetchError, selectBillState, selectBillStatus, billType} from '../../state/slice/billSlice';
import  Bill  from './Bill'

interface IBillListProps {
}

const BillList: React.FunctionComponent<IBillListProps> = () => {

    const billState = useSelector(selectBillState());

  return (
    <div className='mx-auto flex-col sm:w-full rounded-lg m-6'>
        {billState.map(bill=><Bill key={bill.billId} bill={bill}/>)}
    </div>
  );
};

export default BillList;
