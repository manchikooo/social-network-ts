import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Sidebar} from "./components/Navbar/Navbar";
import {Route, Switch} from "react-router-dom";
import {News} from "./components/Navbar/News/News";
import {Music} from "./components/Navbar/Music/Music";
import Footer from "./components/Footer/Footer";
import {Videos} from "./components/Navbar/Videos/Videos";
import {Settings} from "./components/Navbar/Settings/Settings";
import {ReduxStoreType} from "./Redux/ReduxStore";
import {DialogsContainer} from "./components/Navbar/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Navbar/Users/UsersContainer";
import ProfileContainer from "./components/Navbar/Profile/ProfileContainer";

type AppType = {
    store: ReduxStoreType
}

function App(props: AppType) {

    const state = props.store.getState()

    return (
        <div className='app-wrapper'>
            <Header/>
            <Sidebar friends={state.Sidebar.friends}/>
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
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
