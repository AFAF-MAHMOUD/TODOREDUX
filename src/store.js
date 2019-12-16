import {createStore,combineReducers} from "redux";
import listtodoreducers  from './Reducers/listtodoReducer';
import changeText  from './Reducers/ChangeTxtReducer';



const store=createStore(combineReducers({
listtodoreducers:listtodoreducers,
changeText:changeText
})
)
export default store;