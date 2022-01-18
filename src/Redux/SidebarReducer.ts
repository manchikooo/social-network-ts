import {v1} from "uuid";

export type FriendsItemType = {
    id: string
    name: string
}

export type initialStateType = {
    friends: Array<FriendsItemType>
}

const initialState: initialStateType = {
    friends: [
        {id: v1(), name: 'Katya'},
        {id: v1(), name: 'Vlad'},
        {id: v1(), name: 'Maks'},
    ]
}

export const SidebarReducer = (state = initialState, action: any): initialStateType => {

    return state
};
