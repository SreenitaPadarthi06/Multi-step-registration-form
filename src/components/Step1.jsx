import React from "react";

const Step1 = ({ register, errors }) => {
  return (
    <div>
      <h3>Personal Information</h3>

      <div className="field">
        <label htmlFor="fullName">Full Name</label>
        <input id="fullName" {...register("fullName")} placeholder="Enter full name" />
        {errors.fullName && <p id="fullName-error" role="alert" className="error">{errors.fullName.message}</p>}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" {...register("email")} placeholder="Enter email" />
        {errors.email && <p id="email-error" role="alert" className="error">{errors.email.message}</p>}
      </div>

      <div className="field">
        <label htmlFor="phone">Phone</label>
        <input id="phone" {...register("phone")} placeholder="10-digit phone number" />
        {errors.phone && <p id="phone-error" role="alert" className="error">{errors.phone.message}</p>}
      </div>

      <div className="field">
        <label htmlFor="age">Age</label>
        {/* valueAsNumber converts to number; z.preprocess still guards against string NaN */}
       <input id="age" type="number" {...register("age")} placeholder="Enter age" />
        {errors.age && <p id="age-error" role="alert" className="error">{errors.age.message}</p>}
      </div>
    </div>
  );
};

export default Step1;
