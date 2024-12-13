import {configureStore} from '@reduxjs/toolkit'
import EmployeeReducer from './features/EmployeeSlice.js'
import RoleReducer from './features/RoleSlice.js'

export const store = configureStore({
    reducer: { EmployeeReducer, RoleReducer}
});