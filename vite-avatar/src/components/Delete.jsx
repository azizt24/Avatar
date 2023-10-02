import React from "react";
import axios from "axios";
import baseURL from "../api";

export default function Delete({ id }) {
  
   
  return (
    <button type="submit" onClick={handleDeleteClick}>
      Delete Avatar
    </button>
  );

 
  function handleDeleteClick() {
    deleteAvatar(id);
  }

  function deleteAvatar(avatarId) {
    axios
      .delete(`${baseURL}/${avatarId}`)
      .then(response => {
        console.log("Success:", response.data);
      })
      .catch(error => {
        console.log("Error deleting avatar:", error);
      });
  }
}
