import {combineReducers, createStore ,applyMiddleware} from "redux";
import { persistStore, persistReducer} from "redux-persist";
import ReduxThunk from "redux-thunk"
import storage from "redux-persist/lib/storage";
import TodoReducer from './reducer'
// import TodoReducer from "./reducer";


const persistConfig ={
    key:'persist-key' ,
    storage

}

const rootReducer = combineReducers({
    todoState:TodoReducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

const reduxStore = createStore(persistedReducer, applyMiddleware(ReduxThunk))

const persistor = persistStore(reduxStore)

export default reduxStore
export {persistor}