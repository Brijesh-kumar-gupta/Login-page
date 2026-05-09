import React, { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h2>Please login</h2>;

  return (
    <div>
      <h2>Profile</h2>
      <h3>Welcome, {user.name}</h3>
    </div>
  );
};

export default Profile;