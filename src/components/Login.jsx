import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContextProvider";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");

  const handleLogin = () => {
    setUser({ name });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;