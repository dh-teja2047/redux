import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Typography, TextField, Grid, Button } from '@mui/material'

const MAX_LENGTH = 10;

function Place() {

    const [place, setPlace] = useState("");
    const [placeError, setPlaceError] = useState("false");

    const handlePlaceChange =(event) => {
        const inputValue = event.target.value;
        setPlace(inputValue)
        // 
        const placeRegex = /^[a-zA-Z ]*$/;
        const isValidPlace = placeRegex.test(inputValue);
        setPlaceError(isValidPlace)
    }

    return (
        <Box>
            {/* <Typography >Name:</Typography> */}
            <TextField
                error={!placeError}
                id="place"
                type='text'
                label="Place"
                helperText={!placeError ? 'Invalid Place' : ''}
                onChange={handlePlaceChange}
                value={place}
            />
        </Box>
    )
}

export default Place
