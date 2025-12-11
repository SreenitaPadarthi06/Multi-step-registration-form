// src/App.jsx
import React from "react";
import MultiStepForm from "./components/MultiStepForm";
import "./style.css"
export default function App() {
  return (
    <div 
      className="page" 
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        background: "#f5f6fa",
        fontFamily: "Inter, Arial",
      }}
    >
      <MultiStepForm />
    </div>
  );
}
