import { RootState } from '../Store';
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
//import deleteProductAction from '../../actions/product/deleteProductAction';

export type productType ={
    productId?: string;
    productName: string;
    productDescription: string;
    minQuantity: string;
    maxQuantity: string;
    availableUnits: string;
    productPrice: string,
    providerId: string;
}

export type billProducts = {
    productName: string,
    quantity: number,
    price: number
}

export enum productFetchStatus {
    IDLE = 'idle',
    COMPLETED = 'completed',
    FAILED = 'failed',
    PENDING = 'pending',
  }

interface IProductState {
    products: productType[],
    billProducts: billProducts[],
    status: productFetchStatus,
    error: null | string,
}

const initialState: IProductState = {
    products: [],
    billProducts: [],
    status: productFetchStatus.IDLE,
    error: null
}

enum productsURL {
    getAllProductsURL = 'https://new-raul-enterprise.herokuapp.com/get/products',
    postProductsURL = 'https://new-raul-enterprise.herokuapp.com/create/product',
    deleteProductBaseURL = 'https://new-raul-enterprise.herokuapp.com/delete/product'
} 

export const getAllProducts = createAsyncThunk('getAllProducts', async () => {
    const response = await fetch(productsURL.getAllProductsURL)
    return (await response.json()) as productType[]
  })

  export const postProduct = createAsyncThunk('postProduct', async (product: productType) => {
    const response = await fetch(productsURL.postProductsURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(product),
    })
    return (await response.json()) as productType
  })

  export const deleteProductAction = createAsyncThunk('deleteProductAction', async (product: productType) => {
    const response = await fetch(`${productsURL.deleteProductBaseURL}/${product.productId}`, {
      method: 'DELETE',
    })
    return { deleted: response.ok, productId: product.productId }
  })


export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
      productToBill: (state: IProductState, action: PayloadAction<billProducts>) => {

        const isPresent = state.billProducts.find(billProduct=>billProduct.productName === action.payload.productName)

        if(isPresent) {
          state.billProducts = state.billProducts.map(billProduct=> billProduct.productName === action.payload.productName?action.payload:billProduct)
        } else{
          state.billProducts.push(action.payload);
        }
      },

    },
    extraReducers: (builder) => {
        //get
        builder.addCase(getAllProducts.pending, (state, action) => {
            state.status = productFetchStatus.PENDING
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.status = productFetchStatus.COMPLETED
            state.products = action.payload
        })
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.status = productFetchStatus.FAILED
            state.error = 'Something went wrong while fetching'
            state.products = []
        })
          //post
        builder.addCase(postProduct.pending, (state) => {
            state.status = productFetchStatus.PENDING
        })
        builder.addCase(postProduct.fulfilled, (state, action) => {
            state.status = productFetchStatus.COMPLETED
            state.products.push(action.payload); 
        })
        builder.addCase(postProduct.rejected, (state) => {
            state.status = productFetchStatus.FAILED
            state.error = 'Something went wrong while fetching'
        })
        
        // delete
        builder.addCase(deleteProductAction.pending, (state) => {
            state.status = productFetchStatus.PENDING
        })
        builder.addCase(deleteProductAction.fulfilled, (state, action) => {
            state.status = productFetchStatus.COMPLETED
            if (action.payload.deleted) {
              state.products = state.products.filter((product) => product.productId !== action.payload.productId)
            }
        })
        builder.addCase(deleteProductAction.rejected, (state) => {
            state.status = productFetchStatus.FAILED
            state.error = 'Something went wrong while deleting the post'
        })

    }

})


// export default providerSlice.reducer;
export const selectProductState = () => (state: RootState) => state.products.products
export const selectProductStatus = () => (state: RootState) => state.products.status
export const selectProductFetchError = () => (state: RootState) => state.products.error
export const selectBillProducts = () => (state: RootState) => state.products.billProducts
export const {productToBill} = productSlice.actions;