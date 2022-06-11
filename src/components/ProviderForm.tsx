import * as React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProvider } from '../actions/CreateProviderAction';



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
      <form>
          <label htmlFor="providerName">Provider Name:</label>
          <input type="text" name="providerName" 
          value={providerName} onChange={onChangeProviderName} /> <br />
          <label htmlFor="provPersonalID">Provider Personal ID:</label>
          <input type="text" name="provPersonalID"
           value={providerIdentification} onChange={ onChangeProviderIdentification } /> <br />
           <label htmlFor="address"> Address:</label>
           <input type="text" name="address" 
           value={providerAddress} onChange={ onChangeProviderAddress }/>
           <button onClick={ sendForm }>Send</button>           
      </form>
    )
}

export default ProviderForm;