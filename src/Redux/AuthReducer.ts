import {Dispatch} from "redux";
import {AUTH_API} from "../api/auth_api";
import axios from "axios";

export type InitialStateType = {
    resultCode: number
    messages: []
    data: AuthDataType
    isAuthorized: boolean
    photo: string | null
}

export type AuthDataType = {
    userID: number | null
    email: string | null
    login: string | null
}

const initialState: InitialStateType = {
    resultCode: 0,
    messages: [],
    data: {
        userID: null,
        email: null,
        login: null,
    },
    isAuthorized: false,
    photo: null
}

export const AuthReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'SET-AUTH-USER-DATA': {
            return {
                ...state,
                data: {
                    ...action.data,
                },
                isAuthorized: true,
            }
        }
        case 'SET-AUTH-USER-PHOTO': {
            return {
                ...state,
                photo: action.photo
            }
        }
        default:
            return state
    }
}
type ActionTypes = SetAuthUserDataType | SetAuthUserPhotoType

type SetAuthUserDataType = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (userID: number, email: string, login: string) => {
    return {
        type: 'SET-AUTH-USER-DATA',
        data: {
            userID,
            email,
            login,
        }
    } as const
}
type SetAuthUserPhotoType = ReturnType<typeof setAuthUserPhoto>
export const setAuthUserPhoto = (photo: string) => {
    return {
        type: 'SET-AUTH-USER-PHOTO',
        photo
    } as const
}

export const setAuthDataTC = () => (dispatch: Dispatch) => {
    AUTH_API.authMe()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
    AUTH_API.getAuthUserPhoto()
        .then(response => {
            dispatch(setAuthUserPhoto(response.data.photos.small))
        })
}