import * as ActionTypes from "../store/ProductActionTypes";

const initialState = {
    data: [],
    activeProduct: {},
    error: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
            
        case ActionTypes.LOAD_PRODUCTS:            
            return { ...state, data: payload  }

        case ActionTypes.LOAD_PRODUCT:
            return { ...state, activeProduct: payload }
   
        default:
            return state
    }
}