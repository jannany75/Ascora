function ImageUpload({ onChange }) {
  return (
    <input
      type="file"
      accept="image/*"
      onChange={(e) => onChange(e.target.files[0])}
    />
  );
}

export default ImageUpload;