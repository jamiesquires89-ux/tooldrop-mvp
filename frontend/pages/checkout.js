import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { stripePromise } from "../lib/stripe";
import { useEffect, useState } from "react";
import api from "../lib/api";

function CheckoutForm(){
  const stripe = useStripe();
  const elements = useElements();
  const [secrets,setSecrets]=useState({});
  useEffect(()=>{ api.post("/payments/checkout",{hireAmount:150,bondAmount:250}).then(r=>setSecrets(r.data)); },[]);
  return (
    <div>
      <CardElement/>
      <button onClick={()=>alert("Booked!")}>Confirm</button>
    </div>
  );
}

export default function Checkout(){ return <Elements stripe={stripePromise}><CheckoutForm/></Elements>; }
