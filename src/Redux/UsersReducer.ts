import {USERS_API} from "../api/api";
import {Dispatch} from "redux";

export type UserType = {
    id: string
    name: string
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    location: {
        city: string
        country: string
    }
    followed: boolean
}

export type InitialStateType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: Array<string>
}

let initialState: InitialStateType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 4,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: []
}

const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW-UNFOLLOW-USER':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID ? {...u, followed: action.followValue} : u)
            }
        case 'SET-USERS': {
            return {
                ...state,
                users: action.users
            }
        }
        case 'SET-CURRENT-PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'SET-TOTAL-USERS-COUNT': {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case 'IS-TOGGLE-LOADER': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case 'IS-FOLLOWING-IN-PROGRESS': {
            return {
                ...state,
                isFollowingInProgress: action.isFollowingInProgress ? [...state.isFollowingInProgress, action.userId] :
                    state.isFollowingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

type ActionTypes =
    followUnfollowUserACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | isToggleLoaderACType
    | isToggleFollowingInProgressACType

export type followUnfollowUserACType = ReturnType<typeof followUnfollowUser>
export const followUnfollowUser = (userID: string, followValue: boolean) => {
    return {
        type: 'FOLLOW-UNFOLLOW-USER',
        userID,
        followValue,
    } as const
}
export type setUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount
    } as const
}
export type isToggleLoaderACType = ReturnType<typeof isToggleLoader>
export const isToggleLoader = (isFetching: boolean) => {
    return {
        type: 'IS-TOGGLE-LOADER',
        isFetching
    } as const
}
export type isToggleFollowingInProgressACType = ReturnType<typeof isToggleFollowingInProgress>
export const isToggleFollowingInProgress = (isFollowingInProgress: boolean, userId: string) => {
    return {
        type: 'IS-FOLLOWING-IN-PROGRESS',
        isFollowingInProgress,
        userId
    } as const
}

export const getUsersTC = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(isToggleLoader(true))
        USERS_API.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(isToggleLoader(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(setCurrentPage(currentPage))
            })
    }
}
export const followUnfollowTC = (userId: string, followValue: boolean) => {
    return (dispatch: Dispatch) => {
        console.log('statr')
        dispatch(isToggleFollowingInProgress(true, userId))
        if (followValue) {
            USERS_API.followUser(userId)
                .then(resultCode => {
                    if (resultCode === 0) {
                        dispatch(followUnfollowUser(userId, followValue))
                    }
                    dispatch(isToggleFollowingInProgress(false, userId))
                })
        } else {
            USERS_API.unfollowUser(userId)
                .then(resultCode => {
                    if (resultCode === 0) {
                        dispatch(followUnfollowUser(userId, followValue))
                    }
                    dispatch(isToggleFollowingInProgress(false, userId))
                })
        }
    }
}

export default usersReducer