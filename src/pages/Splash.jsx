import "./../styles/splash.css";
import { useNavigate } from "react-router-dom";

function Splash() {

    const navigate = useNavigate();

    return (
        <div className="splash">

            <div className="logoContainer">

                <div className="logo">
                    A
                </div>

                <h1>Ascora</h1>

                <p>Every Journey Matters.</p>

                <button
                    className="startButton"
                    onClick={() => navigate("/login")}
                >
                    Begin Your Journey
                </button>

            </div>

        </div>
    );
}

export default Splash;