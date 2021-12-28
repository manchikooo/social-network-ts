import {combineReducers, createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import DialogsPageReducer from "./DialogsPageReducer";
import {SidebarReducer} from "./SidebarReducer";

let reducers = combineReducers({
    ProfilePage: ProfilePageReducer,
    DialogsPage: DialogsPageReducer,
    Sidebar: SidebarReducer
})
// export type AppStateType = ReturnType<typeof reducers>
export type ReduxStoreType = typeof store

let store = createStore(reducers)

export default store