import axios from "axios";

export const PROFILE_API = {
    getProfile(userID: string) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
    }
}