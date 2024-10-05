/* eslint-disable no-unused-vars */
// import React from 'react'
import '@mantine/core/styles.css';

import { Input, MantineProvider,NativeSelect,createTheme } from '@mantine/core';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import SignUp from './components/SignUp';
import CardBlog from './components/Blogs/Card';
import AddBlog from './components/Blogs/AddBlog';
import AssessmentList from './components/Assessments/AssessmentList';
import Assessment from './components/Assessments/Assessment';
import DoctorsList from './components/Doctors/DoctorsList';
import AssessmentReports from './components/Assessments/AssessmentReports';
import ContactDoctor from './components/Doctors/ContactDoctor';

const theme = createTheme({
  
});

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/listblogs" element={<CardBlog />} />
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/assessmentList" element={<AssessmentList />} />
          <Route path="/assessmentDetail/:id" element={<Assessment />} />
          <Route path="/doctorsList" element={<DoctorsList />} />
          <Route path="/assessmentReports" element={<AssessmentReports/>} />
          <Route path="/doctorsList/:id" element={<ContactDoctor/>} />
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App
