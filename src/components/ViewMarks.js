import { useEffect } from "react";
import React from "react";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";


export default function ViewMarks({setisLogin,setSelectedRole,selectedRole,isLogin}) {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if not logged in, then navigate to login page
    if (!isLogin ) {
      navigate("/login");
    }
  }, [isLogin, selectedRole, navigate]);
  return (
    <>
      <Navbar setisLogin={setisLogin} setSelectedRole={setSelectedRole} selectedRole={selectedRole}/>
      <div>here you can view marks...</div>
    </>
  );
}
