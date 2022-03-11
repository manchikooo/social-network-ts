import React from "react";
import Profile from "./Profile";
import {AppStateType} from "../../../Redux/ReduxStore";
import {
    getProfileStatusTC,
    getUserProfileTC,
    updateProfileStatusTC,
    UserProfileType
} from "../../../Redux/ProfilePageReducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type MapStateToPropsType = {
    profile: UserProfileType
    status: string
}
type MapDispatchToPropsType = {
    getUserProfileTC: (userId: string) => void
    getProfileStatusTC: (userId: string) => void
    updateProfileStatusTC: (status: string) => void
}

type PathParamsType = {
    userID: string
}

export type CommonPropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & CommonPropsType

class ProfileContainer extends React.Component<PropsType, any> {

    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) {
            userID = '2'
        }
        this.props.getUserProfileTC(userID)
        this.props.getProfileStatusTC(userID)
    }

    render() {
        return (
            <div>
                <Profile
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateProfileStatusTC}
                />
            </div>
        )
    }
}

let MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    connect(MapStateToProps, {getUserProfileTC, getProfileStatusTC, updateProfileStatusTC}),
    withRouter,
    // withAuthRedirectHOC
)(ProfileContainer)

