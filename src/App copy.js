import {Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import StudentList from './components/StudentList';
import BasePage from './components/BasePage';
import UpdateStudent from './components/UpdateStudent';
import GetByIdComponent from './components/GetByIdComponent';
function App() {
  
  const [isAuthenticated,setIsAuthenticated]=useState(false);
  
  const handleLogin=()=>{
    setIsAuthenticated(true);
  }
  return (
   
      <div className="App">
        <Navbar></Navbar>
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin}/>}></Route>
            <Route path="/register" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Register/></ProtectedRoute>}></Route>
            <Route path="/studentList" element={<StudentList/>}></Route>
            <Route path="/basePage" element={<BasePage/>}></Route>
            <Route path="/updateStudent/:id" element={<UpdateStudent/>}></Route>
            <Route path="/getByIdComponent/:id" element={<GetByIdComponent/>}></Route>
          </Routes>
      </div>
    
    
  );
}

export default App;
