import {configureStore} from '@reduxjs/toolkit'
import EmployeeReducer from './features/EmployeeSlice.js'

export const store = configureStore({
    reducer: { EmployeeReducer }
});