function CategorySelect({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option>Technology</option>
      <option>Fitness</option>
      <option>Education</option>
      <option>Business</option>
      <option>Travel</option>
      <option>Cooking</option>
      <option>Reading</option>
      <option>Other</option>
    </select>
  );
}

export default CategorySelect;