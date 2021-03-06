import {PostType} from "../components/Navbar/Profile/MyPosts/Post/Post";
import {v1} from "uuid";
import {PROFILE_API} from "../api/profile_api";
import {Dispatch} from "redux";

export type initialStateType = {
    posts: Array<PostType>
    newPostText: string
    status: string
    profile: UserProfileType
    isFetching: boolean
}

export type UserProfileType = {
    aboutMe: string,
    fullName: string,
    photos: {
        large: string
        small: string
    },
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: {
        "facebook": string,
        "website": string,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": string,
        "github": string,
        "mainLink": string
    }
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
    newPostText: '',
    status: 'default status',
    profile: {} as UserProfileType,
    isFetching: false
}

const ProfilePageReducer = (state = initialState, action: ActionTypes): initialStateType => {
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
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'SET-PROFILE-STATUS':
            return {
                ...state,
                status: action.status
            }
        case 'IS-FETCHING-FOR-PROFILE':
            return {
                ...state,
                isFetching: action.value
            }
        default:
            return state
    }
}

type ActionTypes = addPostACType | changePostACType | setUserProfileACType | setProfileStatusACType | isFetchingProfileACType

export type changePostACType = ReturnType<typeof changePostAC>

export function changePostAC(currentText: string) {
    return {
        type: 'CHANGE-NEW-POST-TEXT',
        currentText: currentText
    } as const
}

export type addPostACType = ReturnType<typeof addPostAC>

export function addPostAC() {
    return {
        type: 'ADD-POST'
    } as const
}

type setUserProfileACType = ReturnType<typeof setUserProfileAC>

export function setUserProfileAC(profile: UserProfileType) {
    return {
        type: 'SET-USER-PROFILE',
        profile
    } as const
}

type setProfileStatusACType = ReturnType<typeof setProfileStatusAC>

export function setProfileStatusAC(status: string) {
    return {
        type: 'SET-PROFILE-STATUS',
        status
    } as const
}
type isFetchingProfileACType = ReturnType<typeof isFetchingProfileAC>

export function isFetchingProfileAC(value: boolean) {
    return {
        type: 'IS-FETCHING-FOR-PROFILE',
        value
    } as const
}

export const getUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    dispatch(isFetchingProfileAC(true))
    PROFILE_API.getProfile(userId)
        .then(response => {
            dispatch(isFetchingProfileAC(false))
            dispatch(setUserProfileAC(response.data))
        })
}

export const getProfileStatusTC = (userId: string) => (dispatch: Dispatch) => {
    PROFILE_API.getStatus(userId)
        .then(response => {
            console.log(response.data)
            dispatch(setProfileStatusAC(response.data))
        })
}
export const updateProfileStatusTC = (status: string) => (dispatch: Dispatch) => {
    PROFILE_API.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setProfileStatusAC(status))
            }
        })
}

export default ProfilePageReducer

