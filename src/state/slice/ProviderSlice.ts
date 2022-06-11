import {createSlice} from "@reduxjs/toolkit"

type providerType = {
    providerId: string,
    providerName: string,
    providerPersonalId: string,
    address: string
}

const initialState: providerType [] = [
    {
        providerId: '1',
        providerName: 'July',
        providerPersonalId: '100',
        address: 'Carrera 54'
    }
]

const providerSlice = createSlice({
    name: 'provider',
    initialState,
    reducers: {
        addProvider(state, action){
            state.push(action.payload);
        },
        getAllProvider(state, action){
            state.push(action.payload);
        },
        deleteProvider(state, action){
            state.push(action.payload);
        }
    }
})

export const {addProvider, getAllProvider, deleteProvider} = providerSlice.actions

export default providerSlice.reducer

export type {providerType}
