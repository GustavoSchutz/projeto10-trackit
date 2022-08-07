import "./Login.css"
import { Link } from "react-router-dom";
import { useState } from "react";
// import LoginImg from ""


export default function Login() {


    const [passwordInputType, setPasswordInputType] = useState("password");

    function handleClickSetPasswordInputType() {
        if (passwordInputType === "password") {
            setPasswordInputType("text");    
        } else {
            setPasswordInputType("password");
        }        
    }

    return (
        <div className="background">
            <div className="logo">
                <img src={require("../../assets/images/logo.svg").default} />
            </div>
            <div className="credentials">
                <input type={"email"} placeholder="email" />
                <div className="passwordInput">
                    <div onClick={handleClickSetPasswordInputType} className="ionIcon"><ion-icon name="eye-outline"></ion-icon></div>
                    <input type={passwordInputType} placeholder="senha" />
                </div>
                <div className="loginButton">
                    <h4 className="loginButtonText" >Entrar</h4>  
                </div>
                <Link to={`/signup`}><p className="signupLink">Não tem uma conta? Cadastre-se!</p></Link>
            </div>

        </div>
    )
}