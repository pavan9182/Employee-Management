import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import EmployeeService from '../services/EmployeeService';

function CreateEmployeeComponent() {

    let navigate = useNavigate();

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    const cancelHandle = () => {
        navigate("/employees");
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEmployee({ ...employee, [name]: value });
    }

    const saveHandle = (e) => {
        e.preventDefault();
        console.log(JSON.stringify(employee));

        EmployeeService.addEmployee(employee).then((res) => {
            navigate("/employees");
        })
    }


    return (
        <div className='container'>
            <div className='row mt-2'>
                <div className='col-6 offset-md-3'>
                    <div className='card p-5 mt-5 shadow-lg rounded-4 '>
                        <h3 className='text-center text-primary'> Add Employee </h3>
                        <form>
                            <div className='form-group'>
                                <label className='my-3 fw-bold'>First Name :</label>
                                <input type="text" name="firstName" id="firstName" className="form-control rounded p-2 border-primary" style={{ backgroundColor: "#f4f6f7", color: "#2c3e50", borderRadius: "8px" }} placeholder="Enter first name"
                                    value={employee.firstName}
                                    onChange={handleChange} />

                                <label className='my-3 fw-bold'>Last Name :</label>
                                <input type="text" name="lastName" id='lastName' className='form-control rounded p-2 border-primary' style={{ backgroundColor: "#f4f6f7", color: "#2c3e50", borderRadius: "8px" }} placeholder='Enter last name'
                                    value={employee.lastName}
                                    onChange={handleChange} />

                                <label className='my-3 fw-bold'>Email :</label>
                                <input type="text" name="email" id='email' className='form-control rounded p-2 border-primary' style={{ backgroundColor: "#f4f6f7", color: "#2c3e50", borderRadius: "8px" }} placeholder='Enter your email'
                                    value={employee.email}
                                    onChange={handleChange} />

                                <div className="d-flex gap-5">
                                    <button className='mt-3 btn btn-danger' onClick={cancelHandle}>Cancel</button>
                                    <button className='mt-3 btn btn-success' onClick={saveHandle}>Save</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateEmployeeComponent