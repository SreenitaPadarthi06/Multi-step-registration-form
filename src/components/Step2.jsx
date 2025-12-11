import React from "react";

const Step2 = ({ register, errors }) => {
  return (
    <div>
      <h3>Address Information</h3>

      <div className="field">
        <label htmlFor="address">Address</label>
        <input id="address" {...register("address")} placeholder="Address" />
        {errors.address && <p id="address-error" role="alert" className="error">{errors.address.message}</p>}
      </div>

      <div className="field">
        <label htmlFor="city">City</label>
        <input id="city" {...register("city")} placeholder="City" />
        {errors.city && <p id="city-error" role="alert" className="error">{errors.city.message}</p>}
      </div>

      <div className="field">
        <label htmlFor="state">State</label>
        <input id="state" {...register("state")} placeholder="State" />
        {errors.state && <p id="state-error" role="alert" className="error">{errors.state.message}</p>}
      </div>

      <div className="field">
        <label htmlFor="zip">ZIP</label>
        <input id="zip" {...register("zip")} placeholder="6-digit ZIP code" />
        {errors.zip && <p id="zip-error" role="alert" className="error">{errors.zip.message}</p>}
      </div>
    </div>
  );
};

export default Step2;
