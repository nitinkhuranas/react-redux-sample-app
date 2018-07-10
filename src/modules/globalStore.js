import { createStore } from 'redux';
import userNameReducer from './userName/reducer';

const store = createStore(userNameReducer);
/*uncomment or debugging*/
//window.$store = store;
export default store;
