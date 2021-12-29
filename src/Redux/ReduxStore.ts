import {combineReducers, createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import DialogsPageReducer from "./DialogsPageReducer";
import {SidebarReducer} from "./SidebarReducer";

let rootReducer = combineReducers({
    ProfilePage: ProfilePageReducer,
    DialogsPage: DialogsPageReducer,
    Sidebar: SidebarReducer
})
export type AppStateType = ReturnType<typeof rootReducer>
export type ReduxStoreType = typeof store

let store = createStore(rootReducer)

export default store