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
                users: [...state.users].map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)
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
                isFollowingInProgress: action.isFollowingInProgress ? [...state.isFollowingInProgress, action.userId] : state.isFollowingInProgress.filter(id => id !== action.userId)
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
export const followUnfollowUser = (userID: string) => {
    return {
        type: 'FOLLOW-UNFOLLOW-USER',
        userID
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


export default usersReducer