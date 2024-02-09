import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom"
import CustomTable from '../Table/CustomTable';

import axios from 'axios';
import NavBar from './NavBar';

function UserProfile() {

  const [user, setUser] = useState({})
  const navigate = useNavigate();
  console.log(user)

  useEffect(() => {
    // if (localStorage.getItem('token') == "" || localStorage.getItem('token') == null) {
    //   navigate("/");
    // } else {
      getUserData()
    // }
  }, [])

  const getUserData = () => {
    axios({
      // url: 'http://10.0.0.128:9099/eidiko/internal/userdata/get-all-list-user', method: "get",
      url:'https://datausa.io/api/data?drilldowns=Nation&measures=Population', method:'get'
      // headers: {
      //   'Content-Type': 'application/json',
      //   "Authorization": `Bearer  ${localStorage.getItem("token")}`
      // }
    }
    )
      .then((r) => {
        // setUser(r?.data?.result)
        setUser(r?.data)
      })
      .catch((e) => {
        console.log(e)
      });
  }

  return (
    <Box>
      <NavBar />
      <Box>
        <CustomTable data={user.data} headers={['ID Nation', 'Nation', 'ID Year', 'Year', 'Population', 'Slug Nation', 'Year']}/>
        {/* <CustomTable data={user.data} headers={['username', 'userIdd', 'email', 'city', 'contactNo', 'dateOfBirth']} /> */}
      </Box>

    </Box>

  )
}

export default UserProfile
