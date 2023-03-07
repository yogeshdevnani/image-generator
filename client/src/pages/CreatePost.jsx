import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";

import { FormField } from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("Default");
  const [photoGenerated, setPhotoGenerated] = useState(false);

  const handleSurpriseMe = () => {
    setPrompt(getRandomPrompt);
    console.log("surprise me called");
  };

  const handlePromptValue = (event) => {
    setPrompt(event.target.value);
  };

  const handleGenerateImage = () => {
    setPrompt("Generate Image called");
  };
  return (
    <div>
      <form>
        <div>
          <h2>Want to showcase something off your mind, but can't?</h2>
          <h3> Now you can.</h3>
          <h4>{prompt}</h4>
        </div>

        <input type="button" value="Surprise me" onClick={handleSurpriseMe} />
        <div>
          <input
            type="text"
            onChange={handlePromptValue}
            placeholder="Type the prompt"
          />
        </div>
        <input
          type="submit"
          value="Generate Image Button"
          onClick={handleGenerateImage}
        />
      </form>
      {photoGenerated ? <h1>Photo is here</h1> : <img src={preview} />}
    </div>
  );
};

export default CreatePost;
