import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import {Dialogs} from "./components/Navbar/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/Navbar/News/News";
import {Music} from "./components/Navbar/Music/Music";
import Footer from "./components/Footer/Footer";
import {Videos} from "./components/Navbar/Videos/Videos";
import {Settings} from "./components/Navbar/Settings/Settings";
import {ActionsType, StoreType} from "./Redux/state";

type AppType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
}

function App(props: AppType) {

    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friends={state.sidebar.friends}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile allPosts={state.profilePage.posts}
                                                 dispatch={props.dispatch}
                                                 newPostText={state.profilePage.newPostText}
                               />
                               }
                        />
                        <Route path='/dialogs/*'
                               element={
                                   <Dialogs dialogItems={state.dialogsPage.dialogs}
                                            messages={state.dialogsPage.messages}
                                            newMessageText={state.dialogsPage.newMessageText}
                                            dispatch={props.dispatch}/>
                               }
                        />
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/videos' element={<Videos/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
