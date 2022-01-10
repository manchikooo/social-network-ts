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
}

const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case 'FOLLOW-UNFOLLOW-USER':
            return {
                ...state,
                users: [...state.users].map(u => u.id === action.userID ? {...u, followed: !u.followed} : u)
            }
        // case 'UNFOLLOW-USER':
        //     return {
        //         ...state,
        //         users: [...state.users].map(u => u.id === action.userID ? {...u, followed: false} : u)
        //     }
        case 'SET-USERS': {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}

type ActionTypes = followUnfollowUserACType | setUsersACType

export type followUnfollowUserACType = ReturnType<typeof followUnfollowUserAC>
export const followUnfollowUserAC = (userID: string) => {
    return {
        type: 'FOLLOW-UNFOLLOW-USER',
        userID
    } as const
}
// export type unfollowUserACType = ReturnType<typeof unfollowUserAC>
// export const unfollowUserAC = (userID: string) => {
//     return {
//         type: 'UNFOLLOW-USER',
//         userID
//     } as const
// }
export type setUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: any) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}


export default usersReducer