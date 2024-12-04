import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useState } from "react";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handlesubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await api.post(route, { username, password });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={handlesubmit}
        className="flex flex-col md:flex-col space-y-2 items-center bg-slate-500 h-[300px] w-[400px] "
      >
        <h1 className="text-xl font-bold mb-5 p-3">{name}</h1>
        <input
          type="text"
          className="form-input  p-2 rounded-md  "
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="enter your username"
        />
        <input
          type="password"
          className="form-input p-2 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter your password"
        />
        <button className="p-2 bg-green-300 font-bold text-2xl rounded-md w-[200px] ">
          {name}
        </button>
      </form>
    </div>
  );
}

export default Form;
