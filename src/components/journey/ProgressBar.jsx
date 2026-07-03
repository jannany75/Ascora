function ProgressBar({ progress }) {
  return (
    <div className="progress">
      <div
        className="progressFill"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;