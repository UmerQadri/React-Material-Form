import {
    SIGNUP
} from '../constants'

export default class AuthActions {

    static signup(user){
        return {
            type: SI,
            payload: user
        }
    }
}