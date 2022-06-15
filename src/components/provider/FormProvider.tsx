import * as React from 'react';
import createProviderAction from '../../actions/provider/createProviderAction';
import { postProvider, providerType } from '../../state/slice/providerSlice';
import { useAppDispatch } from '../../state/Store'


interface IFormProviderPostProps {
}

const FormProviderPost: React.FunctionComponent<IFormProviderPostProps> = (props) => {
  const [providerName, setProviderName] = React.useState('')
  const [providerIdentification, setProviderIdentification] = React.useState('')
  const [providerAddress, setProviderAddress] = React.useState('')
  const dispatch = useAppDispatch()

  const providerId = ""

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (providerName && providerIdentification && providerAddress) {
      const newProvider: providerType = { providerId, providerName, providerIdentification, providerAddress, availability: true }
      dispatch(postProvider(newProvider))
      setProviderName('')
      setProviderIdentification('')
      setProviderAddress('')
    }
  }

  const saveProviderForm = (e:React.FormEvent<HTMLButtonElement> ) => {
    e.preventDefault() 
    createProviderAction(providerName, providerIdentification, providerAddress)
    setProviderName('')
    setProviderIdentification('')
    setProviderAddress('')
  }

  return (<form className=''>
    <h1 className=''>Please add a new provider</h1>
    <div className=''>
      <label className=''>
        Provider's Name:
        <input className='' type='text' value={providerName} onChange={(e) => setProviderName(e.target.value)} />
      </label>
    </div>

    <div className=''>
      <label className='text-lg'>
        Provider's Identification:
        <input className='' type='number' min='0' value={providerIdentification} onChange={(e) => setProviderIdentification(e.target.value)} />
      </label>

    </div>
    <div className=''>
      <label className=''>
        Provider's Address:
        <input className='' type='text' value={providerAddress} onChange={(e) => setProviderAddress(e.target.value)} />
      </label>
    </div>
    <div className=''>
      <button type='submit' onClick={(e) => saveProviderForm(e)} className=''>Submit</button>
    </div>

  </form>)
};

export default FormProviderPost
