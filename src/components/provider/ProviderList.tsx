import * as React from 'react';
import { useAppDispatch } from '../../state/Store'
import { useSelector } from 'react-redux'
import { selectProviderState, selectProviderStatus, selectProviderFetchError, getAllProviders, providerFetchStatus } from '../../state/slice/providerSlice'
import Provider from './Provider'

interface IProviderListProps { }

const ProviderList: React.FunctionComponent<IProviderListProps> = () => {
  const dispatch = useAppDispatch()

  const error = useSelector(selectProviderFetchError())
  const status = useSelector(selectProviderStatus())
  const providerState = useSelector(selectProviderState())

  React.useEffect(() => {
    if (status === providerFetchStatus.IDLE) {
      dispatch(getAllProviders())
    }
  }, [dispatch])
  return (
    <table className='w-3/4 mx-auto pl-6 text-sm text-center rounded-lg'>
      <thead className='bg-amber-500'>
        <tr>
          <th className='p-6 px-50 text-lg' >Name</th>
          <th className='p-6 px-50 text-lg'>Identification</th>
          <th className='p-6 px-50 text-lg'>Address</th>
        </tr>
      </thead>
      <tbody>
        {!error && providerState.map((provider) => <Provider key={provider.providerId} provider={provider} />)}
      </tbody>
    </table>)
};

export default ProviderList;
