import ProgressBar from "./ProgressBar";

function JourneyCard({
  title,
  progress,
  subtitle,
}) {
  return (
    <div className="journeyCard">

      <h3>{title}</h3>

      <ProgressBar progress={progress} />

      <p>{subtitle}</p>

    </div>
  );
}

export default JourneyCard;