import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography, TextField, Grid, Button } from '@mui/material'

function PhoneNumber() {

    const [number, setNumber] = useState("");
    const [numberError, setNumberError] = useState("false");

    const handlePhoneNumberChange =(event) => {
        const inputValue = event.target.value;
        setNumber(inputValue)
        const phoneRegex = /^\d{10}$/;
        const isValid = phoneRegex.test(inputValue);
        setNumberError(isValid)
    }

    return (
        <Box>
            {/* <Typography >Name:</Typography> */}
            <TextField
                error={!numberError}
                id="outlined-error"
                label="Phone Number"
                helperText={!numberError ? 'Invalid Number' : ''}
                onChange={handlePhoneNumberChange}
                value={number}
            />
        </Box>
    )
}

export default PhoneNumber
