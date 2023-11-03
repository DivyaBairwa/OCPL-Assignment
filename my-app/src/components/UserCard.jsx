import React from "react";
import "../styles/userCard.css";
export const UserCard = (obj) => {
  return (
    <div id="userCard">
      <div id="userDetails">
        <div>{obj.username ? obj.username : "Username"}</div>
        <div>
          <h5>CONTACT</h5>
          <div>{obj.name ? obj.name : "Name"}</div>
        </div>
        <div>
          <h5>CITY</h5>
          <div>{obj.address.city || "City"}</div>
        </div>
        <div>
          <h5>STATE</h5>
          <div>{obj.address.state || "-"}</div>
        </div>
        <button>View Details</button>
      </div>
    </div>
  );
};
