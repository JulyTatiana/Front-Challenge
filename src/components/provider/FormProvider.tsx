import * as React from 'react';
import { postProvider, providerType } from '../../state/slice/providerSlice';
import { useAppDispatch } from '../../state/Store'


interface IFormProviderPostProps {
}

const FormProviderPost: React.FunctionComponent<IFormProviderPostProps> = (props) => {
  const [providerName, setProviderName] = React.useState('')
  const [providerIdentification, setProviderIdentification] = React.useState('')
  const [providerAddress, setProviderAddress] = React.useState('')
  const dispatch = useAppDispatch()


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (providerName && providerIdentification && providerAddress) {
      const newProvider: providerType = { providerName, providerIdentification, providerAddress, availability: true }
      dispatch(postProvider(newProvider))
      setProviderName('')
      setProviderIdentification('')
      setProviderAddress('')
    }
  }

  return (<form onSubmit={(e) => handleSubmit(e)} className='w-3/4 mx-auto rounded-lg border-4'>
    <h1 className='text-lg bg-amber-500 mx-auto py-5 text-center font-bold rounded-lg'>Add New Provider</h1>
    <div className='p-6 mx-auto'>
      <label className='text-lg'>
        Provider's Name:
        <input className='border-2 border-amber-500 rounded-md' type='text' value={providerName} onChange={(e) => setProviderName(e.target.value)} />
      </label>
    </div>

    <div className='p-6 mx-auto'>
      <label className='text-lg'>
        Provider's Identification:
        <input className='border-2 border-amber-500 rounded-md' type='number' min='0' value={providerIdentification} onChange={(e) => setProviderIdentification(e.target.value)} />
      </label>

    </div>
    <div className='p-6 mx-auto'>
      <label className='text-lg'>
        Provider's Address:
        <input className='border-2 border-amber-500 rounded-md' type='text' value={providerAddress} onChange={(e) => setProviderAddress(e.target.value)} />
      </label>
    </div>
    <div className='flex justify-center my-4'>
      <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
    </div>

  </form>)
};

export default FormProviderPost
