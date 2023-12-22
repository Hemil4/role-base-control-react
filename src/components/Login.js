import { wait } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ isLogin, setisLogin,selectedRole,setSelectedRole }) {
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleClick = () => {
    // Check if a role is selected
    if (selectedRole) {
      setisLogin(true)
      // Redirect to /home after successful login
      navigate("/home");
    } else {
      // Display a message to the user indicating they need to select a role
      alert("Please select a user role before logging in.");
    }
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Login.</label>
        <select
          required
          className="form-control"
          id="exampleFormControlSelect1"
          onChange={handleRoleChange}
        >
          <option selected="selected" disabled="disabled">
            Select User Role
          </option>
          <option value={"student"}>Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <button
          type="button"
          onClick={handleClick}
          className="btn btn-primary btn-lg btn-block"
        >
          Login
        </button>
      </div>
    </div>
  );
}
