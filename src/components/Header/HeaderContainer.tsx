import React from "react";
import Header from "./Header";
import {AuthDataType, setAuthDataTC} from "../../Redux/AuthReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";

type MapStateToPropsType = {
    authData: AuthDataType
    login: string | null
    isAuthorized: boolean
    profilePhoto: string | null
}
type MapDispatchToPropsType = {
    setAuthDataTC: () => void
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType

export class HeaderContainer extends React.Component<PropsType, any> {

    componentDidMount() {
       this.props.setAuthDataTC()
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


export default connect(MapStateToProps, {setAuthDataTC})(HeaderContainer)