import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form'

import testReducer from '../../features/testarea/testReducer';
import restaurantReducer from '../../features/restaurant/restaurantReducer'
import modalsReducer from '../../features/modals/modalReducer'
import authReducer from '../../features/auth/authReducer'
import asyncReducer from '../../features/async/asyncReducer'

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    restaurants: restaurantReducer,
    modals: modalsReducer,
    auth: authReducer,
    async: asyncReducer
});

export default rootReducer;