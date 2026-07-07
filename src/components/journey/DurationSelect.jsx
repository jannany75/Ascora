function DurationSelect({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option>7 Days</option>
      <option>30 Days</option>
      <option>60 Days</option>
      <option>90 Days</option>
      <option>180 Days</option>
      <option>1 Year</option>
    </select>
  );
}

export default DurationSelect;