import { Typography, AppBar, Toolbar, Box, Button, Stack } from '@mui/material'
import React from 'react'
import NavBar from './NavBar';

function Welcome() {

   
  return (

    <Box>
        <NavBar/>
        <Typography variant='h2' sx={{padding:'100px 100px 0px 100px'}}>
            Chapter One
        </Typography>
        <Typography variant="h6" sx={{padding:'10px 100px 0px 100px'}}>It is just one extra mile</Typography>
    </Box>
  )
}

export default Welcome