import React from "react";
import { gData, gLoggedIn } from "./LoginPage";
import { Link, useNavigate } from "react-router-dom";

export default function MainPage(){
    let navigate = useNavigate();

    function handleLogout(){
        navigate("/login");
    }

    return(
        <div>
            {gLoggedIn ? (<div className="display-div">
                <img src={gData.imageUrl} alt="Profile Pic(403 Error)" className="login-image"/>
                <p className="login-name">You have succesfully logged in as {gData.name}!</p>
                <button onClick={handleLogout} className="logout-btn">Log Out</button>
            </div>):(
                <div className = "display-div">
                    <p className = "login-msg">You arent logged in! Please log in <Link to="/login">here</Link></p>
                </div>
            )}
        </div>
    )
}
