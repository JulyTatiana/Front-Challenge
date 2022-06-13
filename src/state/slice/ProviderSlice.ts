import {createSlice, PayloadAction} from "@reduxjs/toolkit"

type providerType = {
    providerId: string,
    providerName: string,
    providerIdentification: string,
    providerAddress: string
}

const initialState: providerType [] = [
    {
        providerId: '',
        providerName: '',
        providerIdentification: '',
        providerAddress: ''
    }
]

const providerSlice = createSlice({
    name: 'provider',
    initialState,
    reducers: {
        addProvider(state, action){
            state.push(action.payload);
        },
        getAllProviders(state, action){
            return action.payload;
        },
        deleteProvider(state, action: PayloadAction<String>){
            const newProvList = state.filter((prov) => prov.providerId != action.payload);
            return newProvList
        }
    }
})

export const {addProvider, getAllProviders, deleteProvider} = providerSlice.actions

export default providerSlice.reducer

export type {providerType}
