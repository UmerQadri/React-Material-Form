import { AuthActions } from '../actions'

export default class authActionMiddleware {
    static signup(user) {
        console.log("in signup middleware");
        
 return (dispatch) =>   {     
    dispatch(AuthActions.signup()); 
    dispatch(AuthActions.signupSuccess());
    }}
}