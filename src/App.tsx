import React from 'react';
import './App.css';
import {Sidebar} from "./components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import {News} from "./components/Navbar/News/News";
import {Music} from "./components/Navbar/Music/Music";
import Footer from "./components/Footer/Footer";
import {Videos} from "./components/Navbar/Videos/Videos";
import {Settings} from "./components/Navbar/Settings/Settings";
import {ReduxStoreType} from "./Redux/ReduxStore";
import UsersContainer from "./components/Navbar/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginPage} from "./components/Login/LoginPage";
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";

type AppType = {
    store: ReduxStoreType
}

function App(props: AppType) {

    const state = props.store.getState()

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Sidebar friends={state.sidebar.friends}/>
            <div className='app-wrapper-content'>
                <Switch>
                    <Route path='/profile/:userID?'
                           component={ProfileContainer}/>
                    <Route path='/dialogs/'
                           component={DialogsContainer}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/videos' component={Videos}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users' component={UsersContainer}/>
                    <Route path='/login' component={LoginPage}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
