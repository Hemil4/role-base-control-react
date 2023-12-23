import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Home({
  handleLogout,
  isLogin,
  selectedRole,
  setisLogin,
  setSelectedRole,
}) {
  const navigate = useNavigate();

  const handleAccessDenied = () => {
    alert("Access denied");
  };

  useEffect(() => {
    // Check if not logged in, then navigate to login page
    if (!isLogin ) {
      navigate("https://role-base-control-react.onrender.com/");
    }
  }, [isLogin, selectedRole, navigate]);

//   if (!isLogin ) {
//     // Render nothing while redirecting
//     return null;
//   }

  return (
    <div>
      <Navbar
        selectedRole={selectedRole}
        setisLogin={setisLogin}
        setSelectedRole={setSelectedRole}
      />
      <hr className="hr hr-blurry" />
      <h2>Only for Teacher</h2>
      <button
        type="button"
        onClick={() => {
          selectedRole === "teacher"
            ? navigate("/addupdatemarks")
            : handleAccessDenied();
        }}
        className="btn btn-light btn-lg btn-block border-dark"
      >
        Add/update marks
      </button>
      <button
        type="button"
        onClick={() => {
          selectedRole === "teacher"
            ? navigate("/addupdateattendance")
            : handleAccessDenied();
        }}
        className="btn btn-light btn-lg btn-block border-dark"
      >
        Add/update attendance
      </button>
      <hr className="hr hr-blurry" />
      <h2>Only for Student</h2>
      <button
        type="button"
        onClick={() => {
          selectedRole === "student"
            ? navigate("/viewmarks")
            : handleAccessDenied();
        }}
        className="btn btn-light btn-lg btn-block border-dark"
      >
        View marks
      </button>
      <button
        type="button"
        onClick={() => {
          selectedRole === "student"
            ? navigate("/viewattendance")
            : handleAccessDenied();
        }}
        className="btn btn-light btn-lg btn-block border-dark"
      >
        View attendance
      </button>
      <hr className="hr hr-blurry" />
    </div>
  );
}
