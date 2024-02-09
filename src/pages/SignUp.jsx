import React, { useState, useEffect } from 'react'
import { Box, Typography, TextField, Grid, Button, Stack, Alert, Snackbar } from '@mui/material'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import NavBar from './NavBar';

function SignUp() {

    const [open, setOpen] = React.useState(false);

    const [userNameError, setUserNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [placeError, setPlaceError] = useState(false);
    const [contactNoError, setContactNoError] = useState(false);
    const [dateOfBirthError, setDateOfBirthError] = useState(false);

    const [userData, setUserData] = useState({
        "userName": "",
        "password": "",
        'email': '',
        'city': '',
        'contactNo': '',
        'dateOfBirth': ''
    })

    const userNameRegex = /^[0-9A-Za-z]{1,10}$/;
    const phoneRegex = /^\d{10}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const placeRegex = /^[a-zA-Z ]*$/;
    const dobRegex = /^(?:\d{4}\/\d{2}\/\d{2}|\d{4}-\d{2}-\d{2})$/;

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    };

    const userSignUp = () => {
        console.log(userData)
        axios
            .post('http://10.0.0.81:9099/eidiko/internal/userdata/create-user', userData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Accept': 'application/json'
                        // 'Authorization': `Bearer ${token}`
                    },
                })
            .then(response => {
                if (response.status === 200) {
                    console.log('API Success:', response.data);
                    localStorage.setItem('userCredentials', JSON.stringify(response.data))
                    setOpen(true);

                } else {
                    console.error('API Error:', response.statusText);
                }
            })
            .catch((error) => {
                console.log(error)
            })

    }

    const handleChange = (e, field) => {
        const inputValue = e.target.value;

        switch (field) {
            case 'userName':
                setUserNameError(!userNameRegex.test(inputValue));
                break;
            case 'password':
                setPasswordError(!passwordRegex.test(inputValue));
                break;
            case 'email':
                setEmailError(!emailRegex.test(inputValue));
                break;
            case 'city':
                setPlaceError(!placeRegex.test(inputValue));
                break;
            case 'contactNo':
                setContactNoError(!phoneRegex.test(inputValue));
                break;
            case 'dateOfBirth':
                setDateOfBirthError(!dobRegex.test(inputValue));
                break;
            default:
                break;
        }

        setUserData({ ...userData, [field]: inputValue });
    };

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };



    console.log(userData)
    return (
        // sx={{ display: { xs: 'block', sm: 'none ' } }}
        <Box sx={{width:{xs:'100%'}}}>
        <NavBar />
            <Stack
                container
                direction='column'
                margin='auto'
                alignItems='center'
                justifyContent='center'
                border='2px solid grey'
                spacing={2}
                sx={{  width: '500px', height: '600px' }}
            >
                <Typography variant={'h3'}>User Details</Typography>
                <TextField label="userName" value={userData.userName} onChange={(e) => handleChange(e, 'userName')} helperText={userNameError ? 'Invalid' : ''} error={userNameError}></TextField>
                <TextField label="password" value={userData.password} onChange={(e) => handleChange(e, 'password')} helperText={passwordError ? 'Invalid' : ''} error={passwordError} type='password'></TextField>
                <TextField label="email" value={userData.email} onChange={(e) => handleChange(e, 'email')} helperText={emailError ? 'Invalid' : ''} error={emailError}></TextField>
                <TextField label="City" value={userData.city} onChange={(e) => handleChange(e, 'city')} helperText={placeError ? 'Invalid' : ''} error={placeError}></TextField>
                <TextField label="Contact" value={userData.contactNo} onChange={(e) => handleChange(e, 'contactNo')} helperText={contactNoError ? 'Invalid' : ''} error={contactNoError}></TextField>
                <TextField label="Date of Birth" value={userData.dateOfBirth} onChange={(e) => handleChange(e, 'dateOfBirth')} helperText={dateOfBirthError ? 'Invalid' : ''} error={dateOfBirthError} placeholder='YYYY-MM-DD'></TextField>

                <Button onClick={userSignUp}>SignUP</Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseSnackBar}>
                    <Alert
                        onClose={handleCloseSnackBar}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        User Signed Up
                    </Alert>
                </Snackbar>
                <Button onClick={navigateToLogin}>Login</Button>
            </Stack>
        </Box>
    )
}

export default SignUp
