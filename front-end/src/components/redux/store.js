import {createStore,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";
import logger from "redux-logger";


const middleware = [reduxThunk];

if(process.env.NODE_ENV === "development"){
    middleware.push(logger);
}

const store = createStore(rootReducer,applyMiddleware(...middleware));

export default store;