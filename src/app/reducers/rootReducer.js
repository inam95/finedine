import { combineReducers } from 'redux';
import testReducer from '../../features/testarea/testReducer';
import restaurantReducer from '../../features/restaurant/restaurantReducer'

const rootReducer = combineReducers({
    test: testReducer,
    restaurants: restaurantReducer
});

export default rootReducer;