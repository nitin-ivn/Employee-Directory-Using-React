import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employee: [{
        id: 2341,
        roleId: 207,
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
        roleId: 206,
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
            const emp = action.payload;
            state.employee.push(emp);
        },

        removeEmployee: (state, action) => {

        },
    }
})

export const filterEmployeeByRole = (roleID) => (state) => {
    const filteredEmp = state.EmployeeReducer.employee.filter(emp => emp.roleId === roleID); 
    return filteredEmp;
}

export const {addEmployee, removeEmployee, filterEmployeeByRole2} = EmployeeSlice.actions;

export default EmployeeSlice.reducer;