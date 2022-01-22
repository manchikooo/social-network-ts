export type InitialStateType = {
    resultCode: number
    messages: []
    data: AuthDataType
    isAuthorized: boolean
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
    isAuthorized: false
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
        default:
            return state
    }
}
type ActionTypes = SetAuthUserDataType

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