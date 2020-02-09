import * as ActionTypes from "./ProductActionTypes";
import axios from "axios";
import { headers } from "../../api/headers"; 


export const loadProducts = (payload) => ({
    type: ActionTypes.LOAD_PRODUCTS,
    payload
})

export const loadProduct = (payload) => ({
    type: ActionTypes.LOAD_PRODUCT,
    payload
})

export const addProduct = (payload) => {
    return dispatch => {
        axios.post(`${process.env.REACT_APP_API_URL}/products`,payload,{headers})
        .then(res => {
            if(res.status === 200) {
                dispatch(getProducts())
            }
        })
        .catch(err => console.log(err))
    }
}

export const getProducts = () => {
  
    return dispatch => {
        axios.get(`${process.env.REACT_APP_API_URL}/products`,{headers})
        .then(res => {
            if(res.status === 200) {
                dispatch(loadProducts(res.data))
            }
        })
        .catch(err => console.log(err))
    }
}

export const getProductById = (id, payload) => {
    return dispatch => {
        axios.get(`${process.env.REACT_APP_API_URL}/products/${id}`,{headers})
        .then(res => {
            if(res.status === 200) {
                dispatch(loadProduct(res.data))
            }
        })
        .catch(err => console.log(err))
    }
}

export const deleteProduct = (id) => {
    return dispatch => {
        axios.delete(`${process.env.REACT_APP_API_URL}/products/${id}`,{headers})
        .then(res => {
            if(res.status === 200) {
                dispatch(getProducts())
            }
        })
        .catch(err => console.log(err))
    }
}

export const updateProduct = (id, payload) => {
    return dispatch => {
        axios.put(`${process.env.REACT_APP_API_URL}/products/${id}`,payload , {headers})
        .then(res => {
            if(res.status === 200) {
                dispatch(getProductById(id, payload))
                dispatch(getProducts())
            }
        })
        .catch(err => console.log(err))

    }
}