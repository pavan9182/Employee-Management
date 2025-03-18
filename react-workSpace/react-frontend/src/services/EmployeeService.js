import axios from "axios";

const EMPLOYEE_API = "http://localhost:9090/api/v1/employees";

class EmployeeService {
  getAuthHeaders() 
  {
    const token = localStorage.getItem("token");
    return { Authorization: `Bearer ${token}` };
  }

  getEmployees() 
  {
    return axios.get(EMPLOYEE_API, { headers: this.getAuthHeaders() });
  }

  addEmployee(employee)
  {
    return axios.post(EMPLOYEE_API, employee, { headers: this.getAuthHeaders() });
  }

  getEmployeeById(employeeId) 
  {
    return axios.get(`${EMPLOYEE_API}/${employeeId}`, { headers: this.getAuthHeaders() });
  }

  updateEmployee(employeeId, employee) 
  {
    return axios.put(`${EMPLOYEE_API}/${employeeId}`, employee, { headers: this.getAuthHeaders() });
  }

  deleteEmployee(employeeId) 
  {
    return axios.delete(`${EMPLOYEE_API}/${employeeId}`, { headers: this.getAuthHeaders() });
  }
}

export default new EmployeeService();