import React from 'react'
import { Provider } from 'react-redux';
import store from './store';
// import store from './store';
import { Box, Container, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import pant from '/Users/dharmateja/TEJA/Web-Dev/cart_redux/src/images/pant.jpeg';
import ShirtContainer from './ShirtContainer';


function Cart() {


    return (
        <Box>
            
            <ShirtContainer/>
            
            <Container>
                <img src={pant} style={{ width: '50px', height: '50px' }} />
                <Typography>Pants Available:{10}</Typography>
                <Button>Buy Pant</Button>
            </Container>
        </Box>
    )
}


export default Cart