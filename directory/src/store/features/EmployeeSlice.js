import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employee: [{
        id: 2341,
        name: "Stan Edgar",
        img: "/Employee/1.jpeg",
        email: "edgar@company.com",
        location: "hello",
        department: "Product Engg",
        role: "Full-stack Developer",
        status: true,
        joinDate: "12/03/2023"
    }],
}

export const EmployeeSlice = createSlice({
    name: 'emp',
    initialState,
    reducers: {
        addEmployee: (state, action) => {

        },

        removeEmployee: (state, action) => {

        }
    }
})

export const {addEmployee, removeEmployee} = EmployeeSlice.actions;

export default EmployeeSlice.reducer;