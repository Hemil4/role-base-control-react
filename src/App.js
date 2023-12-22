import "./App.css";
import react, { useState } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import AddUpdateMarks from "./components/AddUpdateMarks"
import AddUpadateAttandance from "./components/AddUpadateAttandance"
import ViewAttandance from "./components/ViewAttandance"
import ViewMarks from "./components/ViewMarks"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [isLogin, setisLogin] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  // const handleLogin = () => {
  //   setisLogin(true);
  // };
  // const handleLogout = () => {
  //   setisLogin(false);
  // };
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Login isLogin={isLogin} setisLogin={setisLogin} selectedRole={selectedRole} setSelectedRole={setSelectedRole} />}
          />
          <Route
            path="/login"
            element={<Login isLogin={isLogin} setisLogin={setisLogin} selectedRole={selectedRole} setSelectedRole={setSelectedRole} />}
          />
          <Route
            path="/home"
            element={<Home isLogin={isLogin} setisLogin={setisLogin} selectedRole={selectedRole} setSelectedRole={setSelectedRole}/>}
          />
          <Route
            path="/addupdatemarks"
            element={<AddUpdateMarks isLogin={isLogin} setisLogin={setisLogin} selectedRole={selectedRole} setSelectedRole={setSelectedRole}/> }
          />
          <Route
            path="/addupdateattendance"
            element={<AddUpadateAttandance isLogin={isLogin} setisLogin={setisLogin} selectedRole={selectedRole} setSelectedRole={setSelectedRole}/>}
          />
          <Route
            path="/viewmarks"
            element={<ViewMarks isLogin={isLogin} setisLogin={setisLogin} selectedRole={selectedRole} setSelectedRole={setSelectedRole}/>}
          />
          <Route
            path="/viewattendance"
            element={<ViewAttandance isLogin={isLogin} setisLogin={setisLogin} selectedRole={selectedRole} setSelectedRole={setSelectedRole}/>}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
