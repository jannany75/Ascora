function CommunityCard({
  username,
  journey,
  progress,
}) {
  return (
    <div className="communityCard">

      <div className="communityTop">

        <div className="avatar">
          {username[0].toUpperCase()}
        </div>

        <div>

          <h4>{username}</h4>

          <p>{journey}</p>

        </div>

      </div>

      <div className="progressBar">
        <div
          className="progressFill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p>{progress}% Complete</p>

    </div>
  );
}

export default CommunityCard;