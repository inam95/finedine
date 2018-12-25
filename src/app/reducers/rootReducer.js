import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form'

import testReducer from '../../features/testarea/testReducer';
import restaurantReducer from '../../features/restaurant/restaurantReducer'

const rootReducer = combineReducers({
    form: FormReducer,
    test: testReducer,
    restaurants: restaurantReducer
});

export default rootReducer;