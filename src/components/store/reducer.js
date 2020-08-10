 import * as actionTypes from '../store/actionTypes';

const initialState = {
    authenticated: false,

    userLogin:{ 
    username:'hruday@gmail.com',
    password :'hruday123'
}
};
const loginReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.IS_AUTH: 
    
        return {
            ...state, authenticated:action.data.auth
        };
        default: return state;
    }
};

export default loginReducer;