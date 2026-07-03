import Button from "../common/Button";

function ContinueJourney({
  title,
  day,
  progress,
}) {
  return (
    <div className="continueCard">

      <h3>Continue Journey</h3>

      <h2>{title}</h2>

      <p>Day {day}</p>

      <div className="progressBar">
        <div
          className="progressFill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <Button
        text="Continue"
        className="continueButton"
      />

    </div>
  );
}

export default ContinueJourney;