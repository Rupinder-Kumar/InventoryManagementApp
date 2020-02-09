import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginReducer from "../Login/store/LoginReducer";
import productReducer from "../Products/store/ProductReducer";


const rootReducer = combineReducers({
    user: loginReducer,
    dashboard: productReducer
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;