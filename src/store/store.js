import {configureStore} from '@reduxjs/toolkit';
import rootReducer from '../reducers/CartReducers';

const store = configureStore({
    reducer : {
        rest : rootReducer
    }
});

export default store;