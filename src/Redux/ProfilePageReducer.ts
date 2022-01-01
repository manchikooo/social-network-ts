import {PostType} from "../components/Navbar/Profile/MyPosts/Post/Post";
import {v1} from "uuid";
import {ActionsType} from "./store";

type addPostACType = {
    type: 'ADD-POST'
}
type changePostACType = {
    type: 'CHANGE-NEW-POST-TEXT'
    currentText: string
}

export type initialStateType = {
    posts: Array<PostType>
    newPostText: string
}

let initialState: initialStateType = {
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
}

const ProfilePageReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: v1(),
                messageInPost: state.newPostText,
                likes: 100,
                comments: 100,
                reposts: 100
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        case 'CHANGE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.currentText
            }
        default:
            return state
    }
}

export const changePostAC = (currentText: string): changePostACType =>
    ({type: 'CHANGE-NEW-POST-TEXT', currentText: currentText})
export const addPostAC = (): addPostACType => ({type: 'ADD-POST'})


export default ProfilePageReducer