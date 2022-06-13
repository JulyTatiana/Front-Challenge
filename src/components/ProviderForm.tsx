import * as React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProvider } from '../actions/providerActions/CreateProvider';

const ProviderForm = () => {

    const dispatch = useDispatch()

    const [providerName, setProviderName] = useState('')
    const onChangeProviderName = (e:React.ChangeEvent<HTMLInputElement>) =>
        setProviderName(e.target.value)

    const [providerIdentification, setProviderIdentification] = useState('')
    const onChangeProviderIdentification = (e:React.ChangeEvent<HTMLInputElement>) =>
        setProviderIdentification(e.target.value)

    const [providerAddress, setProviderAddress] = useState('')
    const onChangeProviderAddress = (e:React.ChangeEvent<HTMLInputElement>) =>
        setProviderAddress(e.target.value)

    const sendForm = (e:React.FormEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        createProvider(providerName, providerIdentification, providerAddress, dispatch)
        setProviderName('')
        setProviderIdentification('')
        setProviderAddress('')
    }

  return (
      <form className="mt-8 space-y-6" action="#" method="POST">

          <label htmlFor="providerName">Provider Name:</label>
          <input type="text" name="providerName" 
          value={providerName} onChange={onChangeProviderName} 
          className = 'border-2 border-blue-500 rounded-md'/> <br />

          <label htmlFor="providerIdentification">Provider Personal ID:</label>
          <input type="text" name="providerIdentification"
           value={providerIdentification} onChange={ onChangeProviderIdentification }
           className = 'border-2 border-blue-500 rounded-md' /> <br />
           
           <label htmlFor="providerAddress"> Address:</label>
           <input type="text" name="providerAddress" 
           value={providerAddress} onChange={ onChangeProviderAddress }
           className='border-2 border-blue-500 rounded-md'/>
           
           <button onClick={ sendForm } className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >Send</button>          
      </form>
    )
}

export default ProviderForm;