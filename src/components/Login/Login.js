import "./Login.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import LogoImg from "../../assets/images/logo.svg"
import { ThreeDots } from "react-loader-spinner";
import { postLogin } from "../../services/trackit";


export default function Login() {


    const [passwordInputType, setPasswordInputType] = useState("password");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailValidity, setEmailValidity] = useState(false);
    const [passwordValidity, setPasswordValidity] = useState(false);

    const [buttonLoading, setButtonLoading] = useState("Entrar");
    let ThreeDotsPlot = `<ThreeDots color="#FFFFFF" height={80} width={80} />`
    const loginUserData = {};

    function handleClickSetPasswordInputType() {
        if (passwordInputType === "password") {
            setPasswordInputType("text");    
        } else {
            setPasswordInputType("password");
        }        
    }

    const handleChangeEmail = event => {
        if (event.target.validity.valid) {
            setEmail(event.target.value);
            setEmailValidity(true);
        } else {
            setEmail(event.target.value);
            setEmailValidity(false);
        }
    };

    const handleChangePassword = event => {
        if (event.target.validity.valid) {
            setPassword(event.target.value);
            setPasswordValidity(true);
        } else {
            setPassword(event.target.value);
            setPasswordValidity(false);
        }
    };

    function handleClickLoginButton() {

        setIsDisabled(true);
        loginUserData.email = email;
        loginUserData.password = password;
        console.log(loginUserData);
        postLogin(loginUserData).then( (res) => {
            console.log(res.data);
            navigate('/habits');
        })
    }

    return (
        <div className="background">
            <div className="logo">
                <img alt="logo" src={LogoImg} />
            </div>
            <div className="credentials">
            <input type={"email"} placeholder="email" onChange={handleChangeEmail} value={email} required disabled={isDisabled} />
                <div className="passwordInput">
                    <div onClick={handleClickSetPasswordInputType} className="ionIcon"><ion-icon name="eye-outline"></ion-icon></div>
                    <input type={passwordInputType} minLength="4" placeholder="senha" onChange={handleChangePassword} value={password} required disabled={isDisabled}/>
                </div>
                <div onClick={handleClickLoginButton} className="loginButton">
                    <h4 className="loginButtonText" >{buttonLoading}</h4>  
                </div>
                <Link to={`/signup`}><p className="signupLink">Não tem uma conta? Cadastre-se!</p></Link>
            </div>

        </div>
    )
}