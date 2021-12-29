import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Sidebar} from "./components/Navbar/Navbar";
import Profile from "./components/Navbar/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/Navbar/News/News";
import {Music} from "./components/Navbar/Music/Music";
import Footer from "./components/Footer/Footer";
import {Videos} from "./components/Navbar/Videos/Videos";
import {Settings} from "./components/Navbar/Settings/Settings";
import {ActionsType} from "./Redux/store";
import {ReduxStoreType} from "./Redux/ReduxStore";
import {SuperDialogsContainer} from "./components/Navbar/Dialogs/DialogsContainer";

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
                <Routes>
                    <Route path='/profile'
                           element={<Profile/>}/>
                    <Route path='/dialogs/*'
                           element={<SuperDialogsContainer/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/videos' element={<Videos/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
