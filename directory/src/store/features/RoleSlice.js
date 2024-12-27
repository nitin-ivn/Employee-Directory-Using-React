import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    role: [{
        roleId: 200,
        name: 'Customer Service Manager',
        department: 'IT'
    },{
        roleId: 201,
        name: 'Ux Designer',
        department: 'Product Engg'
    },{
        roleId: 202,
        name: 'Assistant BackEnd Developer',
        department: 'UI/UX'
    },{
        roleId: 203,
        name: 'Human Resource Manager',
        department: 'IT'
    },{
        roleId: 204,
        name: 'Front End Developer',
        department: 'Product Engg'
    },{
        roleId: 205,
        name: 'Senior Developer',
        department: 'UI/UX'
    },{
        roleId: 206,
        name: 'Business Analyst',
        department: 'Management'
    },{
        roleId: 207,
        name: 'Full-Stack Developer',
        department: 'Product Engg'
    }]
}

export const RoleSlice = createSlice({
    name: 'role',
    initialState,
    reducers: {

    },
});


export default RoleSlice.reducer;