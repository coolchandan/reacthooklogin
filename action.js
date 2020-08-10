
import * as actionTypes from '../store/actionTypes';

export const loginAction = (data) => {
    return dispatch => {
            dispatch({type:actionTypes.IS_AUTH,data });
       
    };
};
