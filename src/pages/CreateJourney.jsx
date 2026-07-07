import JourneyForm from "../components/journey/JourneyForm";
import "../styles/createJourney.css";

function CreateJourney() {
    return (
        <div className="createJourney">

            <h1>Create Journey</h1>

            <p>
                Start something you'll be proud of.
            </p>

            <JourneyForm />

        </div>
    );
}

export default CreateJourney;