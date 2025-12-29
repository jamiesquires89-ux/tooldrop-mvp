import { useEffect, useState } from "react";
import api from "../lib/api";
import BundleCard from "../components/BundleCard";

export default function Home() {
  const [bundles, setBundles] = useState([]);
  useEffect(() => { api.get("/tools").then(res => setBundles(res.data)); }, []);
  return (
    <div>
      <h1>ToolDrop — Hire Tools</h1>
      {bundles.map(b => <BundleCard key={b.id} bundle={b} />)}
    </div>
  );
}
