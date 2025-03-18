import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";

const EmployeeListComponent = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await EmployeeService.getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  // *Fix: Add deleteEmployee function*
  const deleteEmployee = async (id) =>
    {
    try {
      await EmployeeService.deleteEmployee(id);
      setEmployees(employees.filter(employee => employee.id !== id)); // Remove deleted employee from list
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <div className="container mt-3">
      <h4 className="text-center"> Employee List </h4>
      <div className="row mt-4">
        <Link to="/add-employee" className="btn btn-primary mb-3">
          Add Employee
        </Link>
        <table className="table table-bordered table-striped table-hover shadow-lg rounded">
          <thead className="bg-primary text-white">
            <tr>
              <th>ID</th>
              <th>FIRST-NAME</th>
              <th>LAST-NAME</th>
              <th>EMAIL</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="text-center">
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                <Link to={`/update-employee/${employee.id}`} className="btn btn-info">                    Update
                  </Link>
                  <button className="btn btn-danger ms-2" onClick={() => deleteEmployee(employee.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeListComponent;