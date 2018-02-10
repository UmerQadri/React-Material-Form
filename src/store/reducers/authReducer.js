import {
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE
} from '../constants';

const initialState = {
    user: {},
    authUser: {},
    isLoading: false,
    isError: false,
    error: {},
    isLoggedIn: false,
    isStatusCheckLoading: false,
}

export default function authReducer (state = initialState, action) {
    switch (action.type){
        case SIGNIN_SUCCESS:
            return {
                ...state,
                authUser: action.payload,
                isLoading: false
            }
        case SIGNIN_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
    }
}