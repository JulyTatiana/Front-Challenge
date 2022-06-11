import * as React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createProvider } from '../actions/CreateProviderAction';



const ProviderForm = () => {

    const dispatch = useDispatch()

    const [providerName, setProviderName] = useState('')
    const onChangeProviderName = (e:React.ChangeEvent<HTMLInputElement>) =>
        setProviderName(e.target.value)

    const [provId, setProvId] = useState('')
    const onChangeProvId = (e:React.ChangeEvent<HTMLInputElement>) =>
        setProvId(e.target.value)

    const [address, setAddress] = useState('')
    const onChangeAddress = (e:React.ChangeEvent<HTMLInputElement>) =>
        setAddress(e.target.value)

    
    const sendForm = (e:React.FormEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        createProvider(providerName, provId, address, dispatch)
        setProviderName('')
        setProvId('')
        setAddress('')
    }

  return (
      <form>
          <label htmlFor="providerName">Provider Name:</label>
          <input type="text" name="providerName" 
          value={providerName} onChange={onChangeProviderName} /> <br />
          <label htmlFor="provPersonalID">Provider Personal ID:</label>
          <input type="text" name="provPersonalID"
           value={provId} onChange={ onChangeProvId } /> <br />
           <label htmlFor="address"> Address:</label>
           <input type="text" name="address" 
           value={address} onChange={ onChangeAddress }/>
           <button onClick={ sendForm }>Send</button>           
      </form>
    )
}

export default ProviderForm;