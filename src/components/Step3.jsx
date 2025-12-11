// src/components/Step3.jsx
import React, { useEffect, useState } from "react";

function useCheckUsername(username, setError, clearErrors) {
  useEffect(() => {
    if (!username) {
      // if empty, clear any previous username errors
      clearErrors && clearErrors("username");
      return;
    }

    let mounted = true;
    const id = setTimeout(() => {
      // simulation: treat "takenuser" as taken
      const isTaken = username.toLowerCase() === "takenuser";

      if (!mounted) return;

      if (isTaken) {
        setError &&
          setError("username", {
            type: "manual",
            message: "Username already taken",
          });
      } else {
        clearErrors && clearErrors("username");
      }
    }, 500);

    return () => {
      mounted = false;
      clearTimeout(id);
    };
  }, [username, setError, clearErrors]);
}

const Step3 = ({ register, errors, setError, clearErrors, watch }) => {
  const [checking, setChecking] = useState(false);
  const usernameValue = watch ? watch("username") : "";

  // run the hook which sets/clears errors
  useCheckUsername(usernameValue, setError, clearErrors);

  // optional UI-only "Checking..." / available message
  useEffect(() => {
    if (!usernameValue) return;
    setChecking(true);
    const id = setTimeout(() => setChecking(false), 500);
    return () => clearTimeout(id);
  }, [usernameValue]);

  return (
    <div>
      <h3>Account Creation</h3>

      <div className="field">
        <label htmlFor="username">Username</label>
        <input id="username" {...register("username")} placeholder="Choose username" />
        {errors.username && (
          <p id="username-error" role="alert" className="error">
            {errors.username.message}
          </p>
        )}
        {checking && <p className="small-muted">Checking availability…</p>}
      </div>

      <div className="field">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" {...register("password")} />
        {errors.password && (
          <p id="password-error" role="alert" className="error">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && (
          <p id="confirmPassword-error" role="alert" className="error">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Step3;
