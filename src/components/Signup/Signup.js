import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";
import { postSignup } from "../../services/trackit";

export default function Signup() {

    const [passwordInputType, setPasswordInputType] = useState("password");
    const navigate = useNavigate();


    function handleClickSetPasswordInputType() {
        if (passwordInputType === "password") {
            setPasswordInputType("text");    
        } else {
            setPasswordInputType("password");
        }        
    }

    const [isDisabled, setIsDisabled] = useState(false);
    const newUserData = {};
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");
    const [name, setName] = useState("");

    const [emailValidity, setEmailValidity] = useState(false);
    const [imageValidity, setImageValidity] = useState(false);
    const [nameValidity, setNameValidity] = useState(false);
    const [passwordValidity, setPasswordValidity] = useState(false);


    const handleChangeEmail = event => {
        if (event.target.validity.valid) {
            setEmail(event.target.value);
            setEmailValidity(true);
        } else {
            setEmail(event.target.value);
            setEmailValidity(false);
        }
    };

    const handleChangeImage = event => {
        if (event.target.validity.valid) {
            setImage(event.target.value);
            setImageValidity(true);
        } else {
            setImage(event.target.value);
            setImageValidity(false);
        }
    };

    const handleChangeName = event => {
        if (event.target.validity.valid) {
            setName(event.target.value);
            setNameValidity(true);
        } else {
            setName(event.target.value);
            setNameValidity(false);
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

    function handleClickSignUpButton() {

        if (emailValidity && nameValidity && imageValidity && passwordValidity) {
            setIsDisabled(true);
            newUserData.email = email;
            newUserData.name = name;
            newUserData.image = image;
            newUserData.password = password;

            console.log(newUserData);

            postSignup(newUserData).then( (res) => {
                console.log(res.data);
                navigate('/');
            }).catch((res) => {
                alert(res.message);
                setIsDisabled(false);
            } )

        } else {
            alert("Sua falsa!")
        }

    }

  




    return(
        <div className="background">
            <div className="logo">
                <img alt="Logo" src={require("../../assets/images/logo.svg").default} />
            </div>
            <div className="credentials">
                <input type={"email"} placeholder="email" onChange={handleChangeEmail} value={email} required disabled={isDisabled} />
                <div className="passwordInput">
                    <div onClick={handleClickSetPasswordInputType} className="ionIcon"><ion-icon name="eye-outline"></ion-icon></div>
                    <input type={passwordInputType} minLength="4" placeholder="senha" onChange={handleChangePassword} value={password} required disabled={isDisabled}/>
                </div>
                <input type={"text"} placeholder="nome" onChange={handleChangeName} value={name} required disabled={isDisabled}/>
                <input type={"url"} placeholder="link da foto" onChange={handleChangeImage} value={image} required disabled={isDisabled}/>
                <div onClick={handleClickSignUpButton} className="signupButton" >
                    <h4 className="loginButtonText" >Cadastrar</h4>  
                </div>
                <Link to={`/`}><p className="signupLink">Já tem uma conta? Faça login!</p></Link>
            </div>

        </div>
    )
}