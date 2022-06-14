import { RootState } from '../Store';
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export type providerType ={
    providerId: string;
    providerName: string;
    providerIdentification: string;
    providerAddress: string;
    availability: boolean;
}

export enum providerFetchStatus {
    IDLE = 'idle',
    COMPLETED = 'completed',
    FAILED = 'failed',
    PENDING = 'pending',
  }

interface IProvidersState {
    providers: providerType[],
    status: providerFetchStatus,
    error: null | string,
}

const initialState: IProvidersState = {
    providers: [],
    status: providerFetchStatus.IDLE,
    error: null
}

enum providerURL {
    getAllProvidersURL = 'http://localhost:8090/get/providers',
    postProviderURL = 'http://localhost:8090/create/provider', 
} 

export const getAllProviders = createAsyncThunk('getAllProviders', async () => {
    const response = await fetch(providerURL.getAllProvidersURL)
    return (await response.json()) as providerType[]
  })

  export const postProvider = createAsyncThunk('postProvider', async (provider: providerType) => {
    const response = await fetch(providerURL.postProviderURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(provider),
    })
    return (await response.json()) as providerType
  })

export const providerSlice = createSlice({
    name: 'providers',
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        //get
        builder.addCase(getAllProviders.pending, (state) => {
            state.status = providerFetchStatus.PENDING
        })
        builder.addCase(getAllProviders.fulfilled, (state, action) => {
            state.status = providerFetchStatus.COMPLETED
            state.providers = action.payload
        })
        builder.addCase(getAllProviders.rejected, (state, action) => {
            state.status = providerFetchStatus.FAILED
            state.error = 'fetching is not working properly'
            state.providers = []
        })
        //post
        builder.addCase(postProvider.pending, (state) => {
            state.status = providerFetchStatus.PENDING
        })
        builder.addCase(postProvider.fulfilled, (state, action) => {
            state.status = providerFetchStatus.COMPLETED
            state.providers.push(action.payload); 
        })
        builder.addCase(postProvider.rejected, (state) => {
            state.status = providerFetchStatus.FAILED
            state.error = 'fetching is not working properly'
        })

    }

})


// export default providerSlice.reducer;
export const selectProviderState = () => (state: RootState) => state.providers.providers
export const selectProviderStatus = () => (state: RootState) => state.providers.status
export const selectProviderFetchError = () => (state: RootState) => state.providers.error