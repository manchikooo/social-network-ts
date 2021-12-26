import {PostType} from "../components/Navbar/Profile/MyPosts/Post/Post";
import {v1} from "uuid";
import {ActionsType, ProfilePageType} from "./store";

type addPostACType = {
    type: 'ADD-POST'
    newPostText: string
}
type changePostACType = {
    type: 'CHANGE-NEW-POST-TEXT'
    currentText: string
}

let initialState = {
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

const ProfilePageReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: v1(),
                messageInPost: action.newPostText,
                likes: 100,
                comments: 100,
                reposts: 100
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        case 'CHANGE-NEW-POST-TEXT':
            return {...state, newPostText: action.currentText}
        default:
            return state
    }
}

export const addPostAC = (postText: string): addPostACType => ({type: 'ADD-POST', newPostText: postText})
export const changePostAC = (currentText: string): changePostACType =>
    ({type: 'CHANGE-NEW-POST-TEXT', currentText: currentText})


export default ProfilePageReducer