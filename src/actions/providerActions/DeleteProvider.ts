import * as React from 'react';

const HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

const delProvider = async (id: string) => {
    const response = await fetch(`http://localhost:8090/delete/provider/${id}`,{
        method: 'DELETE',
        headers: HEADERS
    })

    return {providerDeleted: response.ok, providerIdentification: id}
}

export default delProvider