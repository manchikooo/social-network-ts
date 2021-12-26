import {combineReducers, createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import DialogsPageReducer from "./DialogsPageReducer";
import {SidebarReducer} from "./SidebarReducer";

let reducers = combineReducers({
    ProfilePageReducer: ProfilePageReducer,
    DialogsPageReducer: DialogsPageReducer,
    SidebarReducer: SidebarReducer
})
export type AppStateType = ReturnType<typeof reducers>
export type ReduxStoreType = typeof store

let store = createStore(reducers)

export default store