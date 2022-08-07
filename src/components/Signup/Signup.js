import { Link } from "react-router-dom"
import { useState } from "react";

export default function Signup() {

    const [passwordInputType, setPasswordInputType] = useState("password");

    function handleClickSetPasswordInputType() {
        if (passwordInputType === "password") {
            setPasswordInputType("text");    
        } else {
            setPasswordInputType("password");
        }        
    }
    return(
        <div className="background">
            <div className="logo">
                <img src={require("../../assets/images/logo.svg").default} />
            </div>
            <div className="credentials">
                <input type={"email"} placeholder="email" required />
                <div className="passwordInput">
                    <div onClick={handleClickSetPasswordInputType} className="ionIcon"><ion-icon name="eye-outline"></ion-icon></div>
                    <input type={passwordInputType} minLength="4" placeholder="senha" required />
                </div>
                <input type={"text"} placeholder="nome" required />
                <input type={"url"} placeholder="link da foto" required />
                <div className="signupButton" >
                    <h4 className="loginButtonText" >Cadastrar</h4>  
                </div>
                <Link to={`/`}><p className="signupLink">Já tem uma conta? Faça login!</p></Link>
            </div>

        </div>
    )
}