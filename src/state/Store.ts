import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './slice/ProviderSlice'


const store = configureStore(
  {
    reducer: {
      provider: postsReducer
    }
  }
)

export default store
