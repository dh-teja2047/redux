import React from "react";
import TravellorsTable from "./Table/TravellorsTable";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from "./pages/UserProfile";
import Protected from "./pages/Protected";
import UserProfileReducer from "./pages/UserProfileReducer";
import { Provider } from 'react-redux';
// import store from './store'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Welcome/>}/>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        {/* <Route path="/userprofile" element={<UserProfile/>} /> */}
        {/* <Route path="/userprofile" element={<Protected Component={UserProfile} />} /> */}
        {/* <Route path="/userprofile" element={<Protected Component={UserProfileReducer}/> }/> */}
        <Route path="/userprofile" element={<UserProfileReducer/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;

