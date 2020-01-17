import { combineReducers } from 'redux'
import navBarDuck from "./navBarDuck";
import listingDuck from "./listingDuck";

const allReducers = combineReducers({
    navBarDuck, listingDuck
})

export default allReducers