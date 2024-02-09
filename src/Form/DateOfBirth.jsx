import React from 'react'
import { useState } from 'react'
import { Box, Typography, TextField, Grid, Button } from '@mui/material'

function DateOfBirth() {
  
    const [dob, setDOB] = useState("");
    const [dobError, setDOBError] = useState("false");

    const handleDOBChange =(event) => {
        const inputValue = event.target.value;
        setDOB(inputValue)
        // [xyz]
        const dobRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        const isValidDOB = dobRegex.test(inputValue);
        setDOBError(isValidDOB)
    }

    return (
        <Box>
            {/* <Typography >Name:</Typography> */}
            <TextField
                error={!dobError}
                id="dob"
                type='number'
                label="Date of Birth"
                helperText={!dobError ? 'Invalid Format' : ''}
                onChange={handleDOBChange}
                value={dob}
            />
        </Box>
    )
  
}

export default DateOfBirth
