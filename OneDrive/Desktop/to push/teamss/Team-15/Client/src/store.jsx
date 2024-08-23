import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Redux/userSlice'
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})