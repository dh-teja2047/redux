import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography, TextField, Grid, Button } from '@mui/material'

function Password() {

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("false");

    const handlePasswordChange =(event) => {
        const inputValue = event.target.value;
        setPassword(inputValue)
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const isValidPassword = passwordRegex.test(inputValue);
        setPasswordError(isValidPassword)
    }

    return (
        <Box>
            {/* <Typography >Name:</Typography> */}
            <TextField
                error={!passwordError}
                id="password"
                type="password"
                label="Password"
                helperText={!passwordError ? 'Invalid Passwod' : ''}
                onChange={handlePasswordChange}
                value={password}
                
            />
        </Box>
    )
}

export default Password
