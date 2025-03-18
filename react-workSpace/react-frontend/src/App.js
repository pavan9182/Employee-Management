import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EmployeeListComponent from "./components/EmployeeListComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page - No Header/Footer */}
        <Route path="/" element={<Login />} />

        {/* Employee Pages - Show Header & Footer */}
        <Route
          path="/*"
          element={
            <>
              <HeaderComponent />
              <div className="container">
                <Routes>
                  <Route path="/employees" element={<EmployeeListComponent />} />
                  <Route path="/add-employee" element={<CreateEmployeeComponent />} />
                  <Route path="/update-employee/:id" element={<UpdateEmployeeComponent />} />
                  <Route path="*" element={<Navigate to="/employees" />} />
                </Routes>
              </div>
              <FooterComponent />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;