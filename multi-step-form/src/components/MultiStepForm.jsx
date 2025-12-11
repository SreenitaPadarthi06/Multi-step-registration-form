// src/components/MultiStepForm.jsx
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import StepReview from "./StepReview";

/* ---------- validation schema (robust age preprocess) ---------- */
const schema = z
  .object({
    fullName: z.string().min(1, "Full Name is required"),
    email: z.string().email("Invalid email"),
    phone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),

    age: z.preprocess(
      (val) => {
        // normalize empty / null / undefined -> undefined
        if (val === "" || val === null || val === undefined) return undefined;
        // number NaN -> undefined
        if (typeof val === "number" && Number.isNaN(val)) return undefined;
        // numeric string -> number (guard NaN)
        if (typeof val === "string") {
          const n = Number(val);
          return Number.isNaN(n) ? undefined : n;
        }
        return val;
      },
      z
        .number({
          required_error: "Age is required",
          invalid_type_error: "Age is required",
        })
        .min(18, "Must be at least 18")
    ),

    address: z.string().min(1, "Address required"),
    city: z.string().min(1, "City required"),
    state: z.string().min(1, "State required"),
    zip: z.string().regex(/^[0-9]{6}$/, "ZIP must be 6 digits"),

    username: z.string().min(4, "Min 4 characters"),
    password: z
      .string()
      .min(8, "Min 8 characters")
      .regex(/[A-Z]/, "Must contain uppercase")
      .regex(/[a-z]/, "Must contain lowercase")
      .regex(/[0-9]/, "Must contain number")
      .regex(/[^A-Za-z0-9]/, "Must contain special character"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function MultiStepForm() {
  // safely parse saved data from localStorage
  const rawSaved = typeof window !== "undefined" ? localStorage.getItem("form-data") : null;
  let saved = {};
  try {
    saved = rawSaved ? JSON.parse(rawSaved) : {};
  } catch (e) {
    saved = {};
  }
  // if age stored as string, convert to number if possible
  if (saved && saved.age !== undefined && typeof saved.age === "string") {
    const n = Number(saved.age);
    if (!Number.isNaN(n)) saved.age = n;
  }

  const initialStep = Number(localStorage.getItem("current-step")) || 1;
  const [currentStep, setCurrentStep] = useState(initialStep);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setFocus,
    setError,       // <-- add this
    clearErrors, 
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: saved,
    mode: "onBlur",
  });

  // persist form values to localStorage on every change
  useEffect(() => {
    const sub = watch((val) => {
      try {
        localStorage.setItem("form-data", JSON.stringify(val || {}));
      } catch (e) {
        // ignore storage errors
      }
    });
    return () => sub.unsubscribe();
  }, [watch]);

  // persist current step
  useEffect(() => {
    try {
      localStorage.setItem("current-step", String(currentStep));
    } catch (e) {}
  }, [currentStep]);

  // focus first field of step on mount/change
  useEffect(() => {
    const map = { 1: "fullName", 2: "address", 3: "username", 4: null };
    const key = map[currentStep];
    if (key) setTimeout(() => setFocus(key), 40);
  }, [currentStep, setFocus]);

  const goNext = async () => {
    let fields = [];
    if (currentStep === 1) fields = ["fullName", "email", "phone", "age"];
    if (currentStep === 2) fields = ["address", "city", "state", "zip"];
    if (currentStep === 3) fields = ["username", "password", "confirmPassword"];

    const ok = await trigger(fields);
    if (!ok) {
      // move focus to first error field
      const firstKey = Object.keys(errors)[0];
      if (firstKey) setFocus(firstKey);
      return;
    }
    setCurrentStep((s) => Math.min(4, s + 1));
  };

  const goPrev = () => setCurrentStep((s) => Math.max(1, s - 1));

  const submitForm = (data) => {
    console.log("Final Submitted Data:", data);
    try {
      localStorage.removeItem("form-data");
      localStorage.removeItem("current-step");
    } catch (e) {}
    setCurrentStep(1);
    alert("Form Submitted Successfully!");
  };

  const steps = {
    1: <Step1 register={register} errors={errors} />,
    2: <Step2 register={register} errors={errors} />,
    3: <Step3 register={register} errors={errors}  setError={setError}           // <-- pass
        clearErrors={clearErrors}     
        watch={watch}       />,
    4: <StepReview data={watch()} onEdit={(s) => setCurrentStep(Number(s))} />,
  };

  return (
    <div className="form-container card" style={{ maxWidth: 720 }}>
      <h2>Multi-Step Registration Form</h2>

      <p>Step {currentStep} of 4</p>
      <div className="progress-bar" aria-hidden style={{ marginBottom: 16 }}>
        <div style={{ width: `${(currentStep / 4) * 100}%` }} />
      </div>

      <form onSubmit={handleSubmit(submitForm)} noValidate>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.22 }}
          >
            {steps[currentStep]}
          </motion.div>
        </AnimatePresence>

        <div className="buttons" style={{ marginTop: 18 }}>
          <button type="button" onClick={goPrev} disabled={currentStep === 1} className="btn btn-ghost">
            Previous
          </button>

          {currentStep < 4 ? (
            <button type="button" onClick={goNext} className="btn btn-primary">
              Next
            </button>
          ) : (
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
