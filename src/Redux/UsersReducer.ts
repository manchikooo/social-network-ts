import {v1} from "uuid";

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
}

let initialState: InitialStateType = {
    users: [
        //     {
        //         id: v1(),
        //         followed: false,
        //         fullName: 'Dmitry',
        //         status: 'status 1',
        //         location: {
        //             city: 'Minsk',
        //             country: 'Belarus'
        //         }
        //     },
        //     {
        //         id: v1(),
        //         followed: false,
        //         fullName: `Vlad`,
        //         status: 'status 2',
        //         location: {
        //             city: 'Kirov',
        //             country: 'Russia'
        //         }
        //     },
        //     {
        //         id: v1(),
        //         followed: true,
        //         fullName: `Katya`,
        //         status: 'status 3',
        //         location: {
        //             city: 'Kirov',
        //             country: 'Russia'
        //         }
        //     },
        //     {
        //         id: v1(),
        //         followed: true,
        //         fullName: `Elena`,
        //         status: 'status 4',
        //         location: {
        //             city: 'Moscow',
        //             country: 'Russia'
        //         }
        //     },
    ],
    totalUsersCount: 0,
    pageSize: 4,
    currentPage: 1
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
        default:
            return state
    }
}

type ActionTypes = followUnfollowUserACType | setUsersACType | setCurrentPageACType | setTotalUsersCountACType

export type followUnfollowUserACType = ReturnType<typeof followUnfollowUserAC>
export const followUnfollowUserAC = (userID: string) => {
    return {
        type: 'FOLLOW-UNFOLLOW-USER',
        userID
    } as const
}

export type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}

export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount
    } as const
}


export default usersReducer