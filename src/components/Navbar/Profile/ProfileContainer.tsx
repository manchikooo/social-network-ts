import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
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

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

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
        profile: state.ProfilePage.profile
    }
}

const WithURLDataContainerProfileComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, PropsType, AppStateType>(MapStateToProps, {setUserProfileAC: setUserProfileAC})(WithURLDataContainerProfileComponent)
