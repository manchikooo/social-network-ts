import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '38693d4c-6e14-43e3-bc08-570c5b5670c4'
    },
})

export const AUTH_API = {
    authMe() {
        return instance.get(`auth/me`)
    },
    getAuthUserPhoto() {
        return instance.get(`profile/2`)
    }
}