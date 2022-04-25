import { combineReducers, createStore ,applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { getProductReducer,getProductDetailsReducer } from "./reducers/Productreducer";
const reducer=combineReducers({
    getProduct:getProductReducer,
    getProductDetails:getProductDetailsReducer,
})
const middleware=[thunk]
const store=createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(...middleware)
)
);
export default store