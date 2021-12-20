import {PostType} from "../components/Navbar/Profile/MyPosts/Post/Post";
import {DialogItemType} from "../components/Navbar/Dialogs/DialogItem/DialogsItem";
import {MessageType} from "../components/Navbar/Dialogs/Message/Message";
import {v1} from "uuid";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type DialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
    newMessageText: string
}
export type SidebarType = {
    friends: Array<FriendsItemType>
}
export type FriendsItemType = {
    id?: string
    name: string
}

export type StoreType = {
    _state: StateType
    rerenderEntireTree: () => void
    changeNewPostText: (newText: string) => void
    addPost: () => void
    changeNewMessageText: (newMessage: string) => void
    sendNewMessage: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: v1(),
                    messageInPost: 'Hi, how are you?',
                    likes: 98,
                    comments: 22,
                    reposts: 7,
                },
                {
                    id: v1(),
                    messageInPost: `It's my third post!`,
                    likes: 126,
                    comments: 67,
                    reposts: 24,
                },
                {
                    id: v1(),
                    messageInPost: `It's my second post!`,
                    likes: 126,
                    comments: 67,
                    reposts: 24,
                },
                {
                    id: v1(),
                    messageInPost: `It's my first post!`,
                    likes: 126,
                    comments: 67,
                    reposts: 24,
                },],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Vlad Izh'},
                {id: v1(), name: 'Katya Tselya'},
                {id: v1(), name: 'Alexey Navalny'},
                {id: v1(), name: 'Adolf Hitler'},
                {id: v1(), name: 'Donald Trump'},
                {id: v1(), name: 'Hydra Shop'},
            ],
            messages: [
                {id: v1(), message: 'Hello'},
                {id: v1(), message: 'How are you?'},
                {id: v1(), message: 'Пустити'},
                {id: v1(), message: 'Выбрал свой путь - иди по нему до конца'},
                {id: v1(), message: 'MAGA'},
                {id: v1(), message: 'buy please'},
            ],
            newMessageText: 'hello'
        },
        sidebar: {
            friends: [
                {id: v1(), name: 'Katya'},
                {id: v1(), name: 'Vlad'},
                {id: v1(), name: 'Maks'},
            ]
        }
    },
    rerenderEntireTree() {
    },
    changeNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        // .replace(/ +/g, ' ').trim()
        this.rerenderEntireTree()
    },
    addPost() {
        const newPost: PostType = {
            id: v1(),
            messageInPost: this._state.profilePage.newPostText,
            likes: 100,
            comments: 100,
            reposts: 100
        }
        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPostText = ''
        this.rerenderEntireTree()
    },
    changeNewMessageText(newMessage: string) {
        this._state.dialogsPage.newMessageText = newMessage
        this.rerenderEntireTree()
    },
    sendNewMessage() {
        const newMessage: MessageType = {
            id: v1(), message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this.rerenderEntireTree()
    },
    subscribe(observer: () => void) {
        this.rerenderEntireTree = observer
    },
    getState() {
        return this._state
    }
}

// export const subscribe = (observer: () => void) => {
//     rerenderEntireTree = observer
// }
// export const changeNewMessageText = (newMessage: string) => {
//     state.dialogsPage.newMessageText = newMessage
//     rerenderEntireTree()
// }
// export const sendNewMessage = () => {
//     const newMessage: MessageType = {
//         id: v1(), message: state.dialogsPage.newMessageText
//     }
//     state.dialogsPage.messages.push(newMessage)
//     state.dialogsPage.newMessageText = ''
//     rerenderEntireTree()
// }
//
//
// export const changeNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     // .replace(/ +/g, ' ').trim()
//     rerenderEntireTree()
// }
//
// export const addPost = () => {
//     const newPost: PostType = {
//         id: v1(),
//         messageInPost: state.profilePage.newPostText,
//         likes: 100,
//         comments: 100,
//         reposts: 100
//     }
//     state.profilePage.posts.unshift(newPost)
//     state.profilePage.newPostText = ''
//     rerenderEntireTree()
// }

