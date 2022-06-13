import { receiptSlice } from './../state/slice/receiptSlice';
import { productSlice } from './slice/productSlice';
import { configureStore } from "@reduxjs/toolkit";
import {providerSlice } from "../state/slice/providerSlice";
import { useDispatch } from 'react-redux'
import loggedInReducer from '../state/slice/loggedinSlice';
import { billSlice } from '../state/slice/billSlice';



export const store = configureStore({
    reducer:{
        providers: providerSlice.reducer,
        logged: loggedInReducer,
        products: productSlice.reducer,
        receipts: receiptSlice.reducer,
        bills: billSlice.reducer,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
