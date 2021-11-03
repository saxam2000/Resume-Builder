import RootReducer from "./Reducers/RootReducer"
import { createStore } from 'redux';
// console.log("store");
const store = createStore(RootReducer);
export default store