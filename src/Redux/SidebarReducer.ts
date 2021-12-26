import {v1} from "uuid";
import {ActionsType, SidebarType} from "./store";

const initialState = {
    friends: [
        {id: v1(), name: 'Katya'},
        {id: v1(), name: 'Vlad'},
        {id: v1(), name: 'Maks'},
    ]
}

export const SidebarReducer = (state: SidebarType = initialState, action: ActionsType): SidebarType => {

    return state
};
