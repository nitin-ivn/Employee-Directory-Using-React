import React from 'react'
import { useParams } from 'react-router'
import './roledetails.css'
import { useSelector } from 'react-redux';
import { filterEmployeeByRole } from '../../store/features/EmployeeSlice';
import DetailCard from './DetailCard';

function RoleDetails() {
  const roleId = useParams();
  const filteredEmp = useSelector(filterEmployeeByRole(Number(roleId.roleid)));


  return (
    <div className='home'>
      <div className='d-flex title justify-content-between'>
        <div className='d-flex flex-column'>
          <h5 className='fs-5'>Roles {`>`} Employees</h5>
          <p className='desc'>All the roles are cofigured here</p>
        </div>

        <div className='d-flex gap-3 align-items-center'>
          <button className='add'>
            <img className='me-2' src="/Interface/Add.svg" alt="" />
            <span className='btn-text'>ADD EMPLOYEE</span>
            </button>
        </div>
      </div>

      <div className='description d-flex flex-column gap-1'>
        <h5>Role Description</h5>
        <p className='bg-fore'>Configure the providers that are available to users when they sign in. 
          Configure the providers that are available to users when they sign in. 
          Configure the providers that are available to users when they sign in. 
          Configure the providers that are available to users when they sign in.</p>
      </div>


      <div className='role-con mt-3'>
        <DetailCard roleEmp={filteredEmp}/>
      </div>
    </div>
  )
}

export default RoleDetails