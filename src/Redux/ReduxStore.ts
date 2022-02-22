import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import DialogsPageReducer from "./DialogsPageReducer";
import {SidebarReducer} from "./SidebarReducer";
import usersReducer from "./UsersReducer";
import {AuthReducer} from "./AuthReducer";
import thunkMiddleware from "redux-thunk";

let rootReducer = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsPageReducer,
    usersPage: usersReducer,
    sidebar: SidebarReducer,
    auth: AuthReducer

})
export type AppStateType = ReturnType<typeof rootReducer>
export type ReduxStoreType = typeof store

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store