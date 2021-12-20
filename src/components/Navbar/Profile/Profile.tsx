import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Post/Post";
import {ActionsType} from "../../../Redux/state";

type ProfileType = {
    allPosts: Array<PostType>
    newPostText: string
    // changeNewTextCallback: (newText: string) => void
    dispatch: (action: ActionsType) => void
}

export const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts allPosts={props.allPosts}
                     newPostText={props.newPostText}
                     // changeNewTextCallback={props.changeNewTextCallback}
                     dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile