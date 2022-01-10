import {combineReducers, createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import DialogsPageReducer from "./DialogsPageReducer";
import {SidebarReducer} from "./SidebarReducer";
import usersReducer from "./UsersReducer";

let rootReducer = combineReducers({
    ProfilePage: ProfilePageReducer,
    DialogsPage: DialogsPageReducer,
    UsersPage: usersReducer,
    Sidebar: SidebarReducer
})
export type AppStateType = ReturnType<typeof rootReducer>
export type ReduxStoreType = typeof store

let store = createStore(rootReducer)

export default store