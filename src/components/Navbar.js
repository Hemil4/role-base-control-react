import React from "react";
import { useNavigate } from "react-router-dom";


export const Navbar = ({ selectedRole,setisLogin,setSelectedRole }) => {
    const navigate = useNavigate();
    

  return (
    <div className="m-3">
      <div class="alert alert-info" role="alert">
        You are login as {selectedRole}
      </div>
      <button type="button" onClick={()=>{navigate("/home")}} class="btn btn-primary m-2">
        Home
      </button>
      <button type="button" onClick={()=>{setisLogin(false);setSelectedRole(null); navigate("/")}} class="btn btn-primary">
        Logout
      </button>
    </div>
  );
};
