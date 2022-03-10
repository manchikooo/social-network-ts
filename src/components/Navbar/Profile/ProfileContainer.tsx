import React from "react";
import Profile from "./Profile";
import {AppStateType} from "../../../Redux/ReduxStore";
import {getUserProfileTC, UserProfileType} from "../../../Redux/ProfilePageReducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirectHOC} from "../../../HOC/withAuthRedirectHOC";

type MapStateToPropsType = {
    profile: UserProfileType
}
type MapDispatchToPropsType = {
    getUserProfileTC: (userId: string) => void
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
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

let MapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

const WithURLDataContainerProfileComponent = withRouter(ProfileContainer)

export default withAuthRedirectHOC(connect(MapStateToProps, {getUserProfileTC})(WithURLDataContainerProfileComponent))
