import React from "react";
import "./Foot.css";
import { FaCat } from "react-icons/fa";

export function Foot() {
  const year = new Date().getFullYear();

  return (
    <div className="codedBy">
      {year} Coded by Kittyscripts <FaCat />
    </div>
  );
}
