import { configureStore } from '@reduxjs/toolkit'
import postsReducer, { providerType } from './slice/ProviderSlice'


const store = configureStore(
  {
    reducer: {
      provider: postsReducer
    }
  }
)

type store = {
  provider: providerType []
}

export default store
export type{store}
