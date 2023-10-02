import axios from "axios";
import React, { useState } from "react";
import baseURL from "../api.js";

export default function Update({ avatar }) {
 
  const [avatarName, setAvatarName] = useState("");
  const [avatarImg, setAvatarImg] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

 
  return (
    <>
      <button onClick={toggleUpdateState}>Update</button>
      {isUpdate && renderUpdateForm()}
    </>
  );

   
  function toggleUpdateState() {
    setIsUpdate(prev => !prev);
  }

  function renderUpdateForm() {
    return (
      <>
        <div>Updating {avatar.id}</div>
        <InputField 
          value={avatarName} 
          placeholder="Avatar Name" 
          onChange={setAvatarName}
        />
        <InputField 
          value={avatarImg} 
          placeholder="Avatar Image URL" 
          onChange={setAvatarImg}
        />
        <button type="submit" onClick={handleUpdateAvatar}>
          Update Avatar
        </button>
      </>
    );
  }

  function handleUpdateAvatar() {
    const updatedAvatar = {
      name: avatarName || avatar.name,
      avatarImg: avatarImg || avatar.avatarImg
    };

    axios.put(`${baseURL}/${avatar.id}`, updatedAvatar)
      .then(response => {
        console.log("Avatar updated successfully:", response.data);
        resetFields();
      })
      .catch(error => {
        console.log("Error updating avatar:", error);
      });
  }

  function resetFields() {
    setAvatarName("");
    setAvatarImg("");
  }

  function InputField({ value, placeholder, onChange }) {
    return (
      <>
        <label>{placeholder} :</label>
        <input
          value={value}
          placeholder={placeholder.toLowerCase()}
          onChange={e => onChange(e.target.value)}
        />
      </>
    );
  }
}
