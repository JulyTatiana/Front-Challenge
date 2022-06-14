import * as React from 'react';
import deleteProviderAction from '../../actions/provider/deleteProviderAction';
import { providerType } from '../../state/slice/providerSlice'
import { useAppDispatch } from '../../state/Store'

interface IProviderProps {
  provider: providerType
}

const Provider: React.FunctionComponent<IProviderProps> = ({ provider }) => {
  const [availability, setAvailability] = React.useState(provider.availability);
  const dispatch = useAppDispatch()

  const providerUpdate = async (e: React.ChangeEvent<HTMLInputElement>, provider: providerType) => {
    
    setAvailability(e.target.checked);
    const updatedProvider: providerType = { ...provider, availability: !availability }
  }

  const deleteItemForm = (id:string) => {
    deleteProviderAction(id).then((response)=>{console.log(response)})
  }

  return (
    <tr>
      <td className=''><p style={availability ? {} : { textDecoration: 'line-through' }}>{provider.providerName}</p></td>
      <td className=''><p style={availability ? {} : { textDecoration: 'line-through' }}>{provider.providerIdentification}</p></td>
      <td className=''><p style={availability ? {} : { textDecoration: 'line-through' }}>{provider.providerAddress}</p></td>
      <td className=''><input type='checkbox' checked={availability} onChange={e => providerUpdate(e, provider)}></input></td>
      <td><button onClick={() => deleteItemForm(provider.providerId as string) }> Delete </button></td>

    </tr>
  );
};

export default Provider;
