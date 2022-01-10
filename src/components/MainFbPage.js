import React from "react";
import {fbLoggedIn} from "./LoginPage";
import { Link, useNavigate } from "react-router-dom";

export default function MainFbPage(){
    let navigate = useNavigate();

    function handleFbLogout(){
        navigate("/login");
    }

    return(
        <div>
            {
                fbLoggedIn ? (
                    <div className="display-div">
                        <p className="login-msg">You have succesfully logged in through Facebook!</p>
                        <button onClick={handleFbLogout} className="logout-btn">Log Out</button>
                    </div>
                ):(
                    <div className = "display-div">
                        <p className = "login-msg">You arent logged in! Please log in <Link to="/login">here</Link></p>
                    </div>
                )
            }
        </div>
    )
}
