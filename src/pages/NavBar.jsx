import React from 'react'
import { Typography, AppBar, Toolbar, Box, Button } from '@mui/material'
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';

function NavBar() {
    const navigate = useNavigate()

    const navigateToLogin = () =>{
        navigate('/login')
    }

    const navigateToSignUp =() =>{
        navigate('/signup')
    }

    const navigateToUserProfiles =() =>{
        navigate('/userprofile')
    }

    const handleLogout = () =>{
        // const loggedToken = localStorage.getItem('token')
        // console.log(loggedToken)
        // localStorage.clear() 
        localStorage.setItem('token', '')
        
        // localStorage.removeItem(loggedToken);
        navigate('/login')
    }
    
  return (
    <Box sx={{  width:'100%' }} >
        {/* <Box sx={{ flexGrow: 1, width:{xs:'100%'} }} ></Box> */}
    <AppBar position="static" sx={{backgroundColor:'grey'}}>
        <Toolbar >
            <Button variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={navigateToLogin}>
                Login
            </Button>
            <Button  variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={navigateToSignUp}>
                SignUp
            </Button>
            <Button  variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={navigateToUserProfiles}>
                User Profiles
            </Button>
            <Button>
                <LogoutIcon onClick={handleLogout}/>
            </Button>
        </Toolbar>
    </AppBar>
        
    </Box>
  )
}

export default NavBar