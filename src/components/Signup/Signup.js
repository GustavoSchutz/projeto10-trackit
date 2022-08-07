import { Link } from "react-router-dom"
import { useState } from "react";
import { postSignup } from "../../services/trackit";

export default function Signup() {

    const [passwordInputType, setPasswordInputType] = useState("password");

    function handleClickSetPasswordInputType() {
        if (passwordInputType === "password") {
            setPasswordInputType("text");    
        } else {
            setPasswordInputType("password");
        }        
    }

    const [isDisabled, setIsDisabled] = useState(false);
    
    function handleClickSignUpButton() {
        if (!isDisabled) {
            setIsDisabled(true);
        } else if (isDisabled){
            setIsDisabled(false);
        }
    }


    return(
        <div className="background">
            <div className="logo">
                <img src={require("../../assets/images/logo.svg").default} />
            </div>
            <div className="credentials">
                <input type={"email"} placeholder="email" required disabled={isDisabled} />
                <div className="passwordInput">
                    <div onClick={handleClickSetPasswordInputType} className="ionIcon"><ion-icon name="eye-outline"></ion-icon></div>
                    <input type={passwordInputType} minLength="4" placeholder="senha" required disabled={isDisabled}/>
                </div>
                <input type={"text"} placeholder="nome" required disabled={isDisabled}/>
                <input type={"url"} placeholder="link da foto" required disabled={isDisabled}/>
                <div onClick={handleClickSignUpButton} className="signupButton" >
                    <h4 className="loginButtonText" >Cadastrar</h4>  
                </div>
                <Link to={`/`}><p className="signupLink">Já tem uma conta? Faça login!</p></Link>
            </div>

        </div>
    )
}