import { useState } from "react";
import api from "../lib/api";

export default function Login() {
  const [email,setEmail]=useState("");
  const login=async()=>{ const res=await api.post("/auth/login",{email}); localStorage.setItem("token",res.data.token); window.location.href="/"; };
  return (
    <div>
      <input onChange={e=>setEmail(e.target.value)} placeholder="Email" />
      <button onClick={login}>Login</button>
    </div>
  );
}
