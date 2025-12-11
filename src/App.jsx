// src/App.jsx
import React from "react";
import MultiStepForm from "./components/MultiStepForm";
import "./index.css"; // make sure this path matches your CSS file

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <MultiStepForm />
      </div>
    </div>
  );
}
