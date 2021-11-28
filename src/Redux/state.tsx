import {PostType} from "../components/Navbar/Profile/MyPosts/Post/Post";
import {DialogItemType} from "../components/Navbar/Dialogs/DialogItem/DialogsItem";
import {MessageType} from "../components/Navbar/Dialogs/Message/Message";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

type ProfilePageType = {
    posts: Array<PostType>
}
type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}
export type SidebarType = {
    friends: Array<FriendsItemType>
}

export type FriendsItemType = {
    id?: number
    name: string
}


export let state = {
    profilePage: {
        posts: [
            {
                id: 1,
                messageInPost: 'Hi, how are you?',
                likes: 98,
                comments: 22,
                reposts: 7,
            },
            {
                id: 2,
                messageInPost: `It's my first post!`,
                likes: 126,
                comments: 67,
                reposts: 24,
            },
            {
                id: 3,
                messageInPost: `It's my first post!`,
                likes: 126,
                comments: 67,
                reposts: 24,
            },
            {
                id: 4,
                messageInPost: `It's my first post!`,
                likes: 126,
                comments: 67,
                reposts: 24,
            },],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Vlad Izh'},
            {id: 2, name: 'Katya Tselya'},
            {id: 3, name: 'Alexey Navalny'},
            {id: 4, name: 'Adolf Hitler'},
            {id: 5, name: 'Donald Trump'},
            {id: 6, name: 'Hydra Shop'},
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Пустити'},
            {id: 4, message: 'Выбрал свой путь - иди по нему до конца'},
            {id: 5, message: 'MAGA'},
            {id: 6, message: 'buy please'},
        ],
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Katya'},
            {id: 2, name: 'Vlad'},
            {id: 3, name: 'Maks'},
        ]
    }
}