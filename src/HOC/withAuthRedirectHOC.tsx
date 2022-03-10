import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/ReduxStore";
import {ComponentType} from "react";

type mstpType = {
    isAuth: boolean
}

const mstp = (state: AppStateType): mstpType => {
    return {
        isAuth: state.auth.isAuthorized
    }
}

export function withAuthRedirectHOC<T>(Component: ComponentType<T>) {
    function RedirectComponent(props: mstpType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to='/login'/>
        return <Component {...restProps as T}/>
    }

    return connect(mstp)(RedirectComponent)
}