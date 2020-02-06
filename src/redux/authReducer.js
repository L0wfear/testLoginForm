import {
        LOGIN_SUCCES, 
        LOGOUT_SUCCES,
        LOGIN,
        LOGOUT,
        CHECK_IS_AUTH,
        SET_IS_AUTH} from './types/types';
        
   

const initialState = {
    token: localStorage.getItem('token'),
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case LOGIN_SUCCES:
           localStorage.setItem('token', action.token.jwt);
            return {
                ...state,
                isAuth: true,
                token: action.token.jwt
            }
        case LOGOUT_SUCCES:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuth: false,
            }
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: state.token === '86fasfgfsogHGad' ? true : false
            }
    
        default:
            return {
                ...state
            }
    }
};

export const login = () => ({type:LOGIN});
export const logout = () => ({type:LOGOUT});
export const logoutSucces = () => ({type: LOGOUT_SUCCES});
export const loginSucces = (token) => ({type: LOGIN_SUCCES, token});
export const setIsAuth = () => ({type: SET_IS_AUTH});
export const checkIsAuth = () => ({type: CHECK_IS_AUTH});


export default authReducer;