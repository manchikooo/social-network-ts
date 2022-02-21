import React from "react";
import Profile from "./Profile";
import {AppStateType} from "../../../Redux/ReduxStore";
import {setUserProfileAC, UserProfileType} from "../../../Redux/ProfilePageReducer";
import axios from "axios";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsType = {
    profile: UserProfileType
}
type MapDispatchToPropsType = {
    setUserProfileAC: (profile: UserProfileType) => void
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

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => {
                this.props.setUserProfileAC(response.data)
            })
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
        profile: state.profilePage.profile
    }
}

const WithURLDataContainerProfileComponent = withRouter(ProfileContainer)

export default connect(MapStateToProps, {setUserProfileAC: setUserProfileAC})(WithURLDataContainerProfileComponent)
