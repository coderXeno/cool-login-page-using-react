import React from "react";
import { GoogleLogin } from "react-google-login"
import FacebookLogin from "react-facebook-login";
import {useNavigate} from "react-router-dom";

export var gData;
export var gLoggedIn;
export var fbLoggedIn;

export default function LoginPage(){
    let navigate = useNavigate();

    function handleGoogleClick(res){
        console.log(res);
        gData = res.profileObj;
        gLoggedIn = true;
        navigate("/g-logged-in-user");
    }

    function handleGoogleFailure(err){
        console.log(err);
    }

    function handleFbClick(res){
        console.log(res);
        fbLoggedIn = true;
        navigate("/fb-logged-in-user");
    }

    function responseFacebook(response){
        console.log(response);
    }

    return(
        <div className="login-div">
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login With Google"
                onSuccess={handleGoogleClick}
                onFailure={handleGoogleFailure}
                cookiePolicy={'single_host_origin'}
                className="button-google"
            >
            </GoogleLogin>
            <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                autoLoad={true}
                fields="name,email,picture"
                onClick={handleFbClick}
                callback={responseFacebook} 
            />
        </div>
    )
}