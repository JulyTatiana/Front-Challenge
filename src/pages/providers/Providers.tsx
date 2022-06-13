import * as React from 'react';
import FormProviderPost from '../../components/provider/FormProviderPost';
import ProviderList from '../../components/provider/ProviderList';
import { useAppDispatch} from '../../state/Store';
import { useSelector } from 'react-redux';
import { selectReceiptStatus, receiptFetchStatus, getAllReceipts } from '../../state/slice/receiptSlice';
import { selectProviderStatus, providerFetchStatus, getAllProviders } from '../../state/slice/providerSlice';
import { selectProductStatus, productFetchStatus, getAllProducts } from '../../state/slice/productSlice';
import { selectBillStatus, billFetchStatus, getAllBills } from '../../state/slice/billSlice';


interface IProvidersProps {
}

const Providers: React.FunctionComponent<IProvidersProps> = (props) => {
  const dispatch = useAppDispatch();
  const receiptStatus = useSelector(selectReceiptStatus());
  const providerStatus = useSelector(selectProviderStatus());
  const productStatus = useSelector(selectProductStatus());
  const billStatus = useSelector(selectBillStatus());

  React.useEffect(() => {
    if (billStatus === billFetchStatus.IDLE) {
      dispatch(getAllBills())
    }
  }, [dispatch])

  React.useEffect(() => {
    if (receiptStatus === receiptFetchStatus.IDLE) {
      dispatch(getAllReceipts())
    }
  }, [dispatch])

  React.useEffect(() => {
    if (providerStatus === providerFetchStatus.IDLE) {
      dispatch(getAllProviders())
    }
  }, [dispatch])

  React.useEffect(() => {
    if (productStatus === productFetchStatus.IDLE) {
      dispatch(getAllProducts())
    }
  }, [dispatch])


  return <div className='flex justify-center sm:content-center overflow-x-auto shadow-md  mt-10'>
    <div className='w-3/4 mx-auto '>
    <ProviderList/>
    </div>
    <div className='w-3/4 mx-auto'>
      <FormProviderPost/>
    </div>


  </div>;
};

export default Providers;
