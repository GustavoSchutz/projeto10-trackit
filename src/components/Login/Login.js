import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoImg from "../../assets/images/logo.svg"
import { ThreeDots } from "react-loader-spinner";
import { postLogin } from "../../services/trackit";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";


export default function Login() {

    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(false);
    const [passwordInputType, setPasswordInputType] = useState("password");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { userToken, setUserToken } = useContext(UserContext);
    const { loginObj, setLoginObj } = useContext(UserContext);

    const [buttonLoading, setButtonLoading] = useState("Entrar");
    let ThreeDotsPlot = () => { return (<ThreeDots color="#FFFFFF" height={80} width={80} />)}
    const loginUserData = {};

    function handleClickSetPasswordInputType() {
        if (passwordInputType === "password") {
            setPasswordInputType("text");    
        } else {
            setPasswordInputType("password");
        }        
    }

    const handleChangeEmail = event => { 
        setEmail(event.target.value);
    };

    const handleChangePassword = event => {
        setPassword(event.target.value);
    };

    function handleClickLoginButton() {
        setButtonLoading(ThreeDotsPlot);
        setIsDisabled(true);
        loginUserData.email = email;
        loginUserData.password = password;
        postLogin(loginUserData).then( (res) => {
            setUserToken(res.data.token);
            setLoginObj(res.data);
            setButtonLoading("Entrar");
            setIsDisabled(false);
            navigate('/habits');
        }).catch( (res) => {
            console.log(res.status);
            alert(res.message);
            setButtonLoading("Entrar");
            setIsDisabled(false);
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