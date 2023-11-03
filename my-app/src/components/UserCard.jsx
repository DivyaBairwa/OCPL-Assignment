import React, { useState } from "react";
import "../styles/userCard.css";
export const UserCard = (obj) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropDown = () => {
    setShowDropdown((pre) => !pre);
  };
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
          <div>{obj.address.state || "Not Available"}</div>
        </div>
        <button onClick={handleDropDown}>
          {showDropdown ? "Hide Details" : "View Details"}
        </button>
      </div>
      {showDropdown && (
        <div id="dropdown">
          <h5>Description</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum velit
            incidunt, excepturi at vel obcaecati ad reprehenderit accusantium
            soluta dolorum magni similique autem blanditiis eius quod est nobis
            consectetur sint assumenda laboriosam. Sit harum, alias quasi earum
            id optio rerum facilis quaerat iste! Eum quis, earum corporis
            deleniti veritatis repellat?
          </p>
          <div className="contactDetails">
            <div>
              <h5>Contact Person</h5>
              <p>{obj.name || "-"}</p>
              <h5>Designation</h5>
              <p>{obj.designation || "-"}</p>
              <h5>Email</h5>
              <p>{obj.email || "-"}</p>
              <h5>Phone</h5>
              <p>{obj.phone || "-"}</p>
            </div>
            <div>
              <h5>Address</h5>
              <p>{`${obj.address.suite || "House No."} ${
                obj.address.street || "Street"
              } ${obj.address.city || "City"} ${obj.address.state || "State"} ${
                obj.address.zipcode || "123456"
              }`}</p>
              <h5>City</h5>
              <p>{obj.address.city || "-"}</p>
              <h5>State</h5>
              <p>{obj.address.state || "-"}</p>
              <h5>Country</h5>
              <p>{obj.address.country || "-"}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
