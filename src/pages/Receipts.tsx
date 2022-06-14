import * as React from 'react';
import FormReceiptPost from '../components/receipt/FormReceipt';
import ReceiptsList from '../components/receipt/ReceiptsList';

interface IReceiptsProps {
}

const Receipts: React.FunctionComponent<IReceiptsProps> = (props) => {
  return (
    <div>
      <FormReceiptPost/>
      <ReceiptsList/>
    </div>
  );
};

export default Receipts;
