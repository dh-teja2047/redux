import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography, TextField, Grid, Button } from '@mui/material'

function Email() {

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("false");

    const handleEmailChange =(event) => {
        const inputValue = event.target.value;
        setEmail(inputValue)
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isValidEmail = emailRegex.test(inputValue);
        setEmailError(isValidEmail)
    }

    return (
        <Box>
            {/* <Typography >Name:</Typography> */}
            <TextField
                error={!emailError}
                id="email"
                type='email'
                label="Email"
                helperText={!emailError ? 'Invalid Mail' : ''}
                onChange={handleEmailChange}
                value={email}
            />
        </Box>
    )
}

export default Email


