import React, { useState } from "react";
import axios from "axios";
import baseURL from "../api.js";

export default function Create() {
   
  const [avatarData, setAvatarData] = useState({
    avatarName: "",
    avatarImg: ""
  });

  
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setAvatarData(prevData => ({ ...prevData, [id]: value }));
  };

  const addAvatar = () => {
    axios.post(baseURL, avatarData)
      .then(response => {
        console.log("Avatar added successfully:", response.data);
        resetForm();
      })
      .catch(error => {
        console.log("Error adding avatar:", error);
      });
  };

  const resetForm = () => {
    setAvatarData({
      avatarName: "",
      avatarImg: ""
    });
  };

   
  return (
    <div className="create-container">
      <h2>Create Avatar</h2>
      <div className="form-container">
        <FormInput
          label="Avatar Name:"
          id="avatarName"
          value={avatarData.avatarName}
          placeholder="Avatar Name"
          onChange={handleInputChange}
        />
        <FormInput
          label="Avatar Image URL:"
          id="avatarImg"
          value={avatarData.avatarImg}
          placeholder="Image URL"
          onChange={handleInputChange}
        />
        <button onClick={addAvatar} className="add-button">Add Avatar</button>
      </div>
    </div>
  );
}

function FormInput({ label, id, value, placeholder, onChange }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}
