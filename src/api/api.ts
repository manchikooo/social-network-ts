import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '38693d4c-6e14-43e3-bc08-570c5b5670c4'
    },
})

export const USERS_API = {
    getUsers(currentPage: number = 1, pageSize: number = 4) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(userId: string) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data.resultCode)
    },
    unfollowUser(userId: string) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data.resultCode)
    }
}