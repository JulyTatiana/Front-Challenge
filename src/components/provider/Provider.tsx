import * as React from 'react';
import { providerType} from '../../state/slice/providerSlice'
import { useAppDispatch } from '../../state/Store'

interface IProviderProps {
    provider: providerType
}

const Provider: React.FunctionComponent<IProviderProps> = ({provider}) => {
    const [availability, setAvailability] = React.useState(provider.availability);
    const dispatch = useAppDispatch()

    const providerUpdate = async (e:React.ChangeEvent<HTMLInputElement>, provider: providerType) => {
      setAvailability(e.target.checked);
      // const updatedProvider: providerType = { ...provider, availability: !availability}
      }
  

  return (
    <tr>
      <td className='p-5 '><p style={availability?{}:{textDecoration: 'line-through'}}>{provider.providerName }</p></td>
      <td className='p-5 '><p style={availability?{}:{textDecoration: 'line-through'}}>{provider.providerIdentification}</p></td>
      <td className='p-5 '><p style={availability?{}:{textDecoration: 'line-through'}}>{provider.providerAddress}</p></td>
      <td className='p-5 '><input type='checkbox' checked={availability} onChange={e=>providerUpdate(e, provider)}></input></td>
    </tr>
    );
};

export default Provider;
