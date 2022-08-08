import "./globalstyles.css";
import image from "../assets/images/genericProfile.png";



export default function Header({ profilePicture }) {
    return (
        <>
            <div className="header">
                <h1>TrackIt</h1>
                <div style={{ backgroundImage:`url(${profilePicture})` }} className="profile"></div>
            </div>
            <div className="headerPadding"></div>
        </>
    )
}