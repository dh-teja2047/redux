import React, { useReducer } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import { connect } from 'react-redux';
import { Box, Container, Typography } from "@mui/material";
import buyShirt from './shirtAction';
import Button from '@mui/material/Button';
import shirt from '/Users/dharmateja/TEJA/Web-Dev/cart_redux/src/images/shirt.png';
import { shirtReducer } from './shirts/shirtReducer';
import { BUY_SHIRT } from './shirts/shirtType';

function ShirtContainer(props) {

const [state,dispatch]=useReducer(shirtReducer,{
    numOfShirts : 10
})

// const [state, dispatch] = useReducer(reducer, initialShirts);
  
const handleBuyShirt = (shirt) => {
  dispatch({ type: "BUY_SHIRT"});
};
    return (
        // <Provider store={store}>
            <Container>
                <img src={shirt} style={{ width: '50px', height: '50px', alignContent: 'center' }} />
                <Typography>Shirts Available-{state?.numOfShirts}</Typography>
                <Button onClick= {()=> handleBuyShirt(shirt)}>Buy Shirt</Button>
            </Container>
        // </Provider>
    )
}


export default ShirtContainer