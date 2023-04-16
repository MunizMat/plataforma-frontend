import * as types from '../../types';

const initialState = {
    isLoggedIn: false,
    token: false,
    user: {},
    isLoading: false, 
    error: null
};

export default function (state = initialState, action){
    switch(action.type){
        case types.LOGIN_REQUEST: {
            const newState = { ...state };
            newState.isLoading = true;
            newState.error = null;
            return newState;
        }

        case types.LOGIN_SUCCESS: {

            const newState = { ...state };
            newState.isLoading = false;
    
            const { error, email, token } = action.payload;
            if(error){
                newState.error = error;
                return newState;
            }

            newState.error = null;
            newState.token = token;
            newState.isLoggedIn = true;
            newState.user = { email };

            return newState;
        }

        case types.LOGIN_FAILURE: {
            const newState = { ...state };

            newState.isLoading = false;
            newState.error = 'failed';
            return newState;
        }

        case types.LOGOUT: {
            console.log('logout');
            const newState = { ...initialState };
            return newState;
        }


        default: 
            return state;
    }
};