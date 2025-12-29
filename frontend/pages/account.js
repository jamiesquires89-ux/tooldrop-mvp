import { useEffect,useState } from "react";
import api from "../lib/api";

export default function Account(){
  const [bookings,setBookings]=useState([]);
  useEffect(()=>{ api.get("/bookings/my").then(r=>setBookings(r.data)); },[]);
  return <div>{bookings.map(b=><div key={b.id}>{b.start_date} → {b.end_date}</div>)}</div>;
}
