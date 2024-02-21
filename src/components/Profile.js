import React from "react";
const profileImage = "./assets/images/avatar.png";

const Profile = () => {
  return (
    <div className="profile">
      <img src={`${profileImage}`} className="profile-image" />
      <h2>KK Sharma</h2>
      <p className="profile-text">MERN Stack Developer</p>
      <p className="profile-text">kksharma234@gmail.com</p>
      <button>LinkedLn</button> <button>Facebook</button>
    </div>
  );
};

export default Profile;
