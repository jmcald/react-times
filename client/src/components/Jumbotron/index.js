import React from "react";
import "./style.css"

function Jumbotron({ children }) {
  return (
    <div className="jumbotron jumbo-tron">
      {children}
    </div>
  );
}

export default Jumbotron;