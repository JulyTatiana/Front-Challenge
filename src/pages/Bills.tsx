import * as React from 'react';
import { useSelector } from 'react-redux';
import BillList from '../components/bills/BillList';
import FormPostBills from '../components/bills/FormPostBill';
import { getAllBills, selectBillState } from '../state/slice/billSlice';
import { useAppDispatch } from '../state/Store';


interface IBillsProps {
}

const Bills: React.FunctionComponent<IBillsProps> = (props) => {

  return (
    <div className='flex'>
      <BillList/>
    </div>
  );
};

export default Bills;
