import React from "react";
import Header from "./Header";
import axios from "axios";
import {AuthDataType, setAuthUserData} from "../../Redux/AuthReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";

type MapStateToPropsType = {
    authData: AuthDataType
    login: string | null
    isAuthorized: boolean
}
type MapDispatchToPropsType = {
    setAuthUserData: (userID: number, email: string, login: string) => void
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
        })
    }

    render() {
        console.log(this.props)
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
    }
}


export default connect(MapStateToProps, {setAuthUserData})(HeaderContainer)