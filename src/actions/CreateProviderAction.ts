import { addProvider } from "../state/slice/ProviderSlice"


const createProvider = async (providerName:string, provId:string, address:string, dispatch:any) => {

    const createBody = {
        "providerName": providerName,
        "providerPersonalId": provId,
        "address": address
    }

    let createRequest = await fetch('http://localhost:8080/create/provider', { 
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(createBody)
    })

    let response = await createRequest.json()
    dispatch(addProvider(response))

}

export {createProvider}