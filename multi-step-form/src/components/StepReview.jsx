// src/components/StepReview.jsx
import React from "react";

export default function StepReview({ data, onEdit }) {
  return (
    <div>
      <h2>Review Your Details</h2>

      {/* PERSONAL INFO */}
      <section className="review-section">
        <h3>Personal Information</h3>
        <p><b>Full Name:</b> {data.fullName}</p>
        <p><b>Email:</b> {data.email}</p>
        <p><b>Phone:</b> {data.phone}</p>
        <p><b>Age:</b> {data.age}</p>

        <button onClick={() => onEdit(1)} className="btn-edit">
          Edit Section
        </button>
      </section>

      {/* ADDRESS INFO */}
      <section className="review-section">
        <h3>Address Information</h3>
        <p><b>Address:</b> {data.address}</p>
        <p><b>City:</b> {data.city}</p>
        <p><b>State:</b> {data.state}</p>
        <p><b>ZIP:</b> {data.zip}</p>

        <button onClick={() => onEdit(2)} className="btn-edit">
          Edit Section
        </button>
      </section>

      {/* ACCOUNT INFO */}
      <section className="review-section">
        <h3>Account Information</h3>
        <p><b>Username:</b> {data.username}</p>

        <button onClick={() => onEdit(3)} className="btn-edit">
          Edit Section
        </button>
      </section>
    </div>
  );
}
