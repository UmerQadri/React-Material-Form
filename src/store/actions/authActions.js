import {
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE
} from '../constants'

export default class AuthActions {

    static signup(user){
        console.log("here")
        return {
            type: SIGNUP,
            payload: user
        }
    }

    static signupSuccess(data){
        console.log("In there")
        return {
            type: SIGNUP_SUCCESS,
            payload: data
        }
    }

    static signupFailure(error){
        return {
            type: SIGNUP_FAILURE,
            error: error
        }
    }
}