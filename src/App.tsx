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
import {StateType} from "./Redux/state";

type AppType = {
    state: StateType
    addPostCallback: (postText: string) => void
    changeNewTextCallback: (newText: string) => void
    sendNewMessage: () => void
    changeNewMessageText: (newMessage: string) => void
}

function App(props: AppType) {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friends={props.state.sidebar.friends}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile'
                               element={<Profile allPosts={props.state.profilePage.posts}
                                                 addPostCallback={props.addPostCallback}
                                                 newPostText={props.state.profilePage.newPostText}
                                                 changeNewTextCallback={props.changeNewTextCallback}/>
                               }
                        />
                        <Route path='/dialogs/*' element={<Dialogs dialogItems={props.state.dialogsPage.dialogs}
                                                                   messages={props.state.dialogsPage.messages}
                                                                   newMessageText={props.state.dialogsPage.newMessageText}
                                                                   sendNewMessage={props.sendNewMessage}
                                                                   changeNewMessageText={props.changeNewMessageText}
                        />}/>
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
