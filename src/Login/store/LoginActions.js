import * as ActionTypes from "./LoginActionTypes";
import axios from "axios";
import { headers } from "../../api/headers";

export const setError = (payload) => ({
    type: ActionTypes.SET_USER_ERROR,
    payload
})

export const setIsLoggedIn = (payload) => ({
    type: ActionTypes.SET_IS_LOGGED_IN,
    payload
})

export const loginSuccess = (payload) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload
})

export const logoutUser = (payload) => ({
    type: ActionTypes.LOGOUT,
    payload
})

export const login = payload => {
    return dispatch => {
        axios.post(`${process.env.REACT_APP_API_URL}/users/login`, payload)
        .then(res => {
            if(res.status === 200) {
                localStorage.setItem("token", res.data.id);
                dispatch(loginSuccess(res.data.userId));
                dispatch(setIsLoggedIn(true));
            }
            if(res.status === 401) {
                dispatch(setError("Username or Password is incorrect"))
            }
        })
        .catch(err => {
            dispatch(setError("Username or Password is incorrect"))
        })
    }
}

export const logout = () => {
    return dispatch => {
        axios.post(`${process.env.REACT_APP_API_URL}/users/login`, {headers})
        .then(res => console.log(res))
        .catch(err => console.log(err))
        dispatch(logoutUser())
        localStorage.removeItem("token");
    }
}