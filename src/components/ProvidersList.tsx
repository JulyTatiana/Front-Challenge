import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import delProvider from '../actions/providerActions/DeleteProvider';
import getProviders from '../actions/providerActions/GetProviders';
import { deleteProvider, getAllProviders, providerType } from '../state/slice/ProviderSlice';
import {store} from '../state/Store'

const ProvidersList = () => {

    const dispatch = useDispatch()

    const providersInfo = useSelector((state:store) => state.provider)

    useEffect(()=>{
        getProviders().then(
            (provider)=>{
                dispatch(getAllProviders(provider))
            }
        )
        },[])

    const handleDel = async (id:string) => {
        const response = await delProvider (id) 
        if(response.providerDeleted){
            dispatch(deleteProvider(id))
        }
    }
    

    return(
        <div>
            <h1>Provider's List</h1>
            <ul>{providersInfo.map((prov:providerType, index)=>
            <li key={index}>
                {prov.providerName} <button onClick={()=>handleDel(prov.providerId)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded'>Delete Provider</button>
            </li>)}
            </ul>
        </div>
    )
}

export default ProvidersList