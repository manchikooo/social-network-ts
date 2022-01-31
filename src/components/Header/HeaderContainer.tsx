import React from "react";
import Header from "./Header";
import axios from "axios";
import {AuthDataType, setAuthUserData, setAuthUserPhoto} from "../../Redux/AuthReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";

type MapStateToPropsType = {
    authData: AuthDataType
    login: string | null
    isAuthorized: boolean
    profilePhoto: string | null
}
type MapDispatchToPropsType = {
    setAuthUserData: (userID: number, email: string, login: string) => void
    setAuthUserPhoto: (photo: string) => void
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderContainer extends React.Component<PropsType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login)
            }
            return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
                this.props.setAuthUserPhoto(response.data.photos.small)
            })
        })
    }

    render() {
        return (
            <>
                <Header {...this.props}/>
            </>
        );
    }
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        authData: state.auth.data,
        login: state.auth.data.login,
        isAuthorized: state.auth.isAuthorized,
        profilePhoto: state.auth.photo,
    }
}


export default connect(MapStateToProps, {setAuthUserData, setAuthUserPhoto})(HeaderContainer)