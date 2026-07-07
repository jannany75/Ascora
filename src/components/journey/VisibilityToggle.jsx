function VisibilityToggle({ value, onChange }) {
  return (
    <div className="visibilityToggle">

      <label>
        <input
          type="radio"
          value="public"
          checked={value === "public"}
          onChange={(e) => onChange(e.target.value)}
        />
        Public
      </label>

      <label>
        <input
          type="radio"
          value="private"
          checked={value === "private"}
          onChange={(e) => onChange(e.target.value)}
        />
        Private
      </label>

    </div>
  );
}

export default VisibilityToggle;