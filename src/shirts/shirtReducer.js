import { useReducer } from 'react';
import {BUY_SHIRT} from './shirtType'

const initialShirts = {
    numOfShirts : 10
}

export const shirtReducer = (state , action) => {

console.log(state);

    switch(action.type){
        case BUY_SHIRT: return{
            numOfShirts:state.numOfShirts -1
        }
        default: return{
            state 
        }
    
}
  };