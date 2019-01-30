import React from "react";
import "./style.css";

export function BookContainer({ children }) {
  return (
    <div className="overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function BookItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}