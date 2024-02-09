import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography, TextField, Grid, Button } from '@mui/material'

const MAX_LENGTH = 10;

function Name() {

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");

    useEffect(() => {
        // Set errorMessage only if text is equal or bigger than MAX_LENGTH
        if (name.length >= MAX_LENGTH) {
            setNameError(
                'Name cannot exceed 10 characters'
            );
        }
    }, [name]);

    useEffect(() => {
        if (name.length < MAX_LENGTH && nameError) {
            setNameError("");
        }
    }, [name, nameError]);


    return (
        <Box>
            {/* <Typography >Name:</Typography> */}
            <TextField
                error={name.length >= MAX_LENGTH}
                id="name"
                label="Name"
                helperText={nameError}
                onChange={(e) => setName(e.target.value)}
                value={name}
                type='text'
            />
        </Box>
    )
}

export default Name
