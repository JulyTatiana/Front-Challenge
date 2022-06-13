import * as React from 'react';

const getProviders = async () =>{

    let getRequest = await fetch('http://localhost:8090/get/providers')

    let data = await getRequest.json()

    return data

}

export default getProviders