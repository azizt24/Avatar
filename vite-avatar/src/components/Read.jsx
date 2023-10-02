import React, { useEffect, useState } from "react";
import axios from "axios";
import baseURL from "../api.js";
import Update from "./update.jsx";
import Delete from "./Delete.jsx";

export default function Read() {
  // State management
  const [avatars, setAvatars] = useState([]);

  // Lifecycle
  useEffect(() => {
    fetchAvatars();
  }, []);

  // Render
  return (
    <div className="avatar-list">
      {avatars.length > 0 ? renderAvatars() : <p>Loading...</p>}
    </div>
  );

  // Helpers
  function renderAvatars() {
    return avatars.map((avatar) => (
      <div key={avatar.id} className="avatar-card">
        <h1>{avatar.name}</h1>
        <img src={avatar.avatarImg} alt={`Avatar of ${avatar.name}`} />
        <Update avatar={avatar} />
        <Delete id={avatar.id} />
      </div>
    ));
  }

  function fetchAvatars() {
    axios.get(baseURL)
      .then(response => {
        setAvatars(response.data);
      })
      .catch(error => {
        console.log("Error fetching data:", error);
      });
  }
}
