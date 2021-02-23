import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from './users-reducer'

let reducers = combineReducers({
  profileReducer: profileReducer,
  dialogsReducer: dialogsReducer,
  navbarReducer: navbarReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);


export default store;
