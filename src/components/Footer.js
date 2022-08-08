import "./globalstyles.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function Footer() {

    const percentage = 66

    return (
        <>
            <div className="footer">
                <h4 className="footerSides">Hábitos</h4>
                <div className="dailyMeter"><CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                    })}
      /></div>
                <h4 className="footerSides">Histórico</h4>
            </div>
            <div className="footerPadding"></div>
        </>
        
    )
}