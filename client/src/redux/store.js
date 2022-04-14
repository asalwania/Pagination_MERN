import { configureStore } from '@reduxjs/toolkit'
import { userApi } from '../services/userService'
import userReducer from './userSlice'

export const store = configureStore({
    reducer: {
        users: userReducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (gDM) => gDM().concat(userApi.middleware)
})