import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostContainer} from "./MyPosts/MyPostsContainer";
import Profile from "./Profile";
import {AppStateType} from "../../../Redux/ReduxStore";
import {setUserProfileAC, UserProfileType} from "../../../Redux/ProfilePageReducer";
import axios from "axios";
import {connect} from "react-redux";

type MapStateToPropsType = {
    profile: UserProfileType
}
type MapDispatchToPropsType = {
    setUserProfileAC: (profile: UserProfileType) => void
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<ProfilePropsType, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/3`)
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

export default connect(MapStateToProps, {setUserProfileAC: setUserProfileAC})(ProfileContainer)
