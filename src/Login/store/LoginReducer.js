import * as ActionTypes from "../store/LoginActionTypes";

const initialState = {
    loggedInUser: null,
    isLoggedIn: false,
    error: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
            
        case ActionTypes.SET_USER_ERROR:
            return { ...state, error: payload }

        case ActionTypes.SET_IS_LOGGED_IN:
            return { ...state, isLoggedIn: payload }

        case ActionTypes.LOGIN_SUCCESS:
            return { ...state, loggedInUser: payload, isLoggedIn: true }
                        
        case ActionTypes.LOGOUT:
            return { ...state, isLoggedIn: false, loggedInUser: null }
            
        default:
            return state
    }
}