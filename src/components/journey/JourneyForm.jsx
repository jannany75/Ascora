import { useState } from "react";

import Input from "../common/Input";
import Button from "../common/Button";
import { createJourney } from "../../services/journey";
import { auth } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import CategorySelect from "./CategorySelect";
import DurationSelect from "./DurationSelect";
import VisibilityToggle from "./VisibilityToggle";
import ImageUpload from "./ImageUpload";

function JourneyForm() {
    const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState("Technology");
  const [duration, setDuration] = useState("30 Days");
  const [visibility, setVisibility] = useState("public");
  const [coverImage, setCoverImage] = useState(null);

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!title || !description || !goal) {
    alert("Please fill all required fields.");
    return;
  }

  try {

    await createJourney({

      title,

      description,

      goal,

      category,

      duration,

      visibility,

      coverImage: "",

      progress: 0,

      milestones: 0,

      createdBy: auth.currentUser.uid,

    });

    alert("Journey Created Successfully!");

    navigate("/home");

  } catch (error) {

    alert(error.message);

  }
};

  return (
    <form onSubmit={handleSubmit}>

      <Input
        placeholder="Journey Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <CategorySelect
        value={category}
        onChange={setCategory}
      />

      <Input
        placeholder="Goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />

      <DurationSelect
        value={duration}
        onChange={setDuration}
      />

      <VisibilityToggle
        value={visibility}
        onChange={setVisibility}
      />

      <ImageUpload
        onChange={setCoverImage}
      />

      <Button
        text="Create Journey"
        className="loginButton"
        type="submit"
      />

    </form>
  );
}

export default JourneyForm;