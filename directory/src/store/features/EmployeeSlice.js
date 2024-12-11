import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employee: [{
        id: 2341,
        name: "Stan Edgar",
        img: "/Employee/1.jpeg",
        email: "edgar@company.com",
        location: "Hyderabad",
        department: "Product Engg",
        role: "Full-stack Developer",
        status: true,
        joinDate: "12/03/2023"
    },
    {
        id: 2342,
        name: "Stan Edgar",
        img: "/Employee/1.jpeg",
        email: "edgar@company.com",
        location: "Ahmedabad",
        department: "Management",
        role: "Business Analyst",
        status: false,
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