import React, { useState, useEffect } from 'react';
import { Box, TextField } from '@mui/material';

function DataProp({ regex, id, type, label, onChange,value }) {

    const [data, setData] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
        // console.log(data);
    }, [data]);

    const handleChange = (event) => {
        const inputValue = event.target.value;
        console.log(inputValue)
        setData(inputValue);
        // console.log(setData)
        // console.log(data)
        const isValid = regex.test(inputValue);  
        setError(!isValid);
    }

    return (
        <Box>
            <TextField
                error={error}
                id={id}
                type={type}
                label={label}
                helperText={error ? 'Invalid' : ''}
                // onChange={onChange}
                onChange={(e) => onChange(e, value, regex)}
                value={data}
                
            />
        </Box>
    );
}

export default DataProp;
