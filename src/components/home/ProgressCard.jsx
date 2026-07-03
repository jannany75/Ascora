function ProgressCard({
  progress,
  streak,
  milestones,
}) {
  return (
    <div className="progressCard">

      <h3>Today's Progress</h3>

      <div className="progressBar">
        <div
          className="progressFill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <h2>{progress}%</h2>

      <div className="progressStats">

        <div>
          <span>🔥</span>
          <p>{streak} Day Streak</p>
        </div>

        <div>
          <span>🎯</span>
          <p>{milestones} Milestones Today</p>
        </div>

      </div>

    </div>
  );
}

export default ProgressCard;