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
    // changeNewMessageText: (newMessage: string) => void
    // sendNewMessage: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}

export type ActionsType = addPostACType | changePostACType | sendMessageACType | changeMessageACType

type addPostACType = {
    type: 'ADD-POST'
    newPostText: string
}
type changePostACType = {
    type: 'CHANGE-NEW-POST-TEXT'
    currentText: string
}
type sendMessageACType = {
    type: 'SEND-MESSAGE'
    newMessageText: string
}
type changeMessageACType = {
    type: 'CHANGE-MESSAGE-TEXT',
    currentMessageText: string
}


export const addPostAC = (postText: string): addPostACType => ({type: 'ADD-POST', newPostText: postText})
export const changePostAC = (currentText: string): changePostACType =>
    ({type: 'CHANGE-NEW-POST-TEXT', currentText: currentText})

export const sendMessageAC = (messageText: string): sendMessageACType =>
    ({type: 'SEND-MESSAGE', newMessageText: messageText})
export const changeMessageTextAC = (currentText: string): changeMessageACType =>
    ({type: 'CHANGE-MESSAGE-TEXT', currentMessageText: currentText})

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

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this.rerenderEntireTree = observer
    },
    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                const newPost: PostType = {
                    id: v1(),
                    messageInPost: action.newPostText,
                    likes: 100,
                    comments: 100,
                    reposts: 100
                }
                this._state.profilePage.posts.unshift(newPost)
                this._state.profilePage.newPostText = ''
                this.rerenderEntireTree()
                break;
            case 'CHANGE-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.currentText
                this.rerenderEntireTree()
                break;
            case 'SEND-MESSAGE':
                const newMessage: MessageType = {
                    id: v1(), message: this._state.dialogsPage.newMessageText
                }

                this._state.dialogsPage.messages = [...this._state.dialogsPage.messages, newMessage]
                this._state.dialogsPage.newMessageText = ''
                this.rerenderEntireTree()
                break;
            case 'CHANGE-MESSAGE-TEXT':
                this._state.dialogsPage.newMessageText = action.currentMessageText
                this.rerenderEntireTree()
                break;

            default:
                return store
        }
    },
}


// changeNewMessageText(newMessage: string) {
//     this._state.dialogsPage.newMessageText = newMessage
//     this.rerenderEntireTree()
// },
// sendNewMessage() {
//     const newMessage: MessageType = {
//         id: v1(), message: this._state.dialogsPage.newMessageText
//     }
//     this._state.dialogsPage.messages.push(newMessage)
//     this._state.dialogsPage.newMessageText = ''
//     this.rerenderEntireTree()
// },

// changeNewPostText(newText: string) {
//     this._state.profilePage.newPostText = newText
//     // .replace(/ +/g, ' ').trim()
//     this.rerenderEntireTree()
// },
// addPost() {
//     const newPost: PostType = {
//         id: v1(),
//         messageInPost: this._state.profilePage.newPostText,
//         likes: 100,
//         comments: 100,
//         reposts: 100
//     }
//     this._state.profilePage.posts.unshift(newPost)
//     this._state.profilePage.newPostText = ''
//     this.rerenderEntireTree()
// },



