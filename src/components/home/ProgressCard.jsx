function ProgressCard() {
  return (
    <div className="progressCard">

      <h3>Today's Progress</h3>

      <div className="progressBar">
        <div className="progressFill"></div>
      </div>

      <h2>68%</h2>

      <div className="progressStats">

        <div>
          🔥
          <p>4 Day Streak</p>
        </div>

        <div>
          🎯
          <p>2 Milestones Today</p>
        </div>

      </div>

    </div>
  );
}

export default ProgressCard;