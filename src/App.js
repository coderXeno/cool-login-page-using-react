import React from "react";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";
import {Navigate,BrowserRouter, Routes,Route} from "react-router-dom";
import PageUndef from "./components/PageUndef";
import MainGPage from "./components/MainGPage";
import MainFbPage from "./components/MainFbPage";

export default function App(){
    return(
        <div className="main-div">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/g-logged-in-user" element={<MainGPage/>}/>
                    <Route path="/fb-logged-in-user" element={<MainFbPage/>}/>
                    <Route path="*" element={<PageUndef/>}/>
                    <Route path="/" element={<Navigate to = "/login"/>}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}