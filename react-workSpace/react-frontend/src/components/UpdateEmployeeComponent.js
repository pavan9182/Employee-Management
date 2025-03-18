import React from 'react'
import { useState} from 'react'
import { useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function UpdateEmployeeComponent() 
{

  const navigate=useNavigate();

  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const {id}=useParams();

  useEffect(()=>{
      EmployeeService.getEmployeeById(id).then((res)=>
      {
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setEmail(res.data.email);
      })
  },[])

  const updateHandler=(e)=>
  {

      e.preventDefault();
      console.log(id);
      const employee={firstName,lastName,email};

      if(id)
      {
          EmployeeService.updateEmployee(id,employee).then((res)=>
          {
            navigate("/employees");
          });
      }
      else{
        EmployeeService.addEmployee(employee).then((res)=>
          {
            navigate("/employees");
          })
      }
      
  }

  const cancelHandle=(e)=>
  {
    e.preventDefault();
    navigate("/employees");
  }



  return (
     <div className='container'>
         <div className='row mt-2'>
            <div className='col-6 offset-md-3'>
              <div className='card p-5 mt-5 shadow-lg rounded-4 style={{ background: "linear-gradient(to right, #3498db, #8e44ad)", color: "white" }}'>
              <h4 className='text-center  text-primary'> Update Employee </h4> 
                 <form>
                    <div className='form-group'>
                        <label className='my-3 fw-bold'>First Name :</label>
                        <input type="text" name="firstName" id='firstName' className='form-control rounded p-2 border-primary' style={{ backgroundColor: "#f4f6f7", color: "#2c3e50", borderRadius: "8px" }}
                        value={firstName}
                        onChange={(e)=> setFirstName(e.target.value)}
                       />
                      
                        <label className='my-3 fw-bold'>Last Name :</label>
                        <input type="text" name="lastName" id='lastName' className='form-control rounded p-2 border-primary' style={{ backgroundColor: "#f4f6f7", color: "#2c3e50", borderRadius: "8px" }}
                        value={lastName}
                        onChange={(e)=> setLastName(e.target.value)}
                       />
                      
                        <label className='my-3 fw-bold'>Email :</label>
                        <input type="text" name="email" id='email' className='form-control rounded p-2 border-primary' style={{ backgroundColor: "#f4f6f7", color: "#2c3e50", borderRadius: "8px" }}
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                       />
                         <div className="d-flex gap-5">
                        <button className='mt-3 btn btn-danger' onClick={cancelHandle}>cancel</button>
                        <button className='mt-3 btn btn-success ms-3' onClick={updateHandler}>save</button>
                        </div>
                    </div>
                  </form>
              </div>
            </div>
          </div> 
    </div>

  )
}

export default UpdateEmployeeComponent