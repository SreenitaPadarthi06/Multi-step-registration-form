# DESIGN.md — Architecture & Technical Decisions

## 1. Project Overview
This project implements an accessible, user-friendly **Multi-Step Registration Form** built with **React + Vite**.  
It includes:
- Multi-step navigation (4 steps)
- Progressive validation using Zod + React Hook Form
- LocalStorage persistence for both step and form data
- Animated transitions (Framer Motion)
- Accessibility compliance (WCAG considerations)
- Keyboard navigation support
- Review & edit screen before final submission

---

## 2. Component Architecture

### **Main Components**
| Component | Responsibility |
|----------|----------------|
| `MultiStepForm.jsx` | Holds global form logic, step navigation, validation, localStorage sync, animations |
| `Step1.jsx` | Personal Information fields |
| `Step2.jsx` | Address Information |
| `Step3.jsx` | Account creation, async username validation |
| `StepReview.jsx` | Shows final summary with "Edit" buttons |

The application uses a **single form state** managed by React Hook Form, passed into each step.

---

## 3. State Management Approach

### **Why React Hook Form + Zod?**
- Highly performant
- Built-in validation lifecycle (`trigger`, `watch`, `errors`)
- Easy integration with Zod schemas
- Handles form state efficiently without rerenders

### **Why Not Redux / Zustand / XState?**
Since form data is only needed inside the form flow, React Hook Form is the optimal choice — lightweight and purpose-built for forms.

LocalStorage is used as the persistence layer.

---

## 4. Validation Strategy (Zod)

### **Why Zod?**
- Declarative schemas
- Excellent error messages
- Easy refinements (e.g., password match)
- Smooth integration with React Hook Form

### **Key validation features used:**
- Required fields
- Email regex validation
- Phone number regex (10 digits)
- Preprocessed age value using `z.preprocess`
- Strong password rules:
  - Uppercase
  - Lowercase
  - Number
  - Special character
  - Min length 8
- Confirm password matching using `.refine`
- Async username availability simulation (500ms delay)

---

## 5. Data Persistence (localStorage)

### **What is stored?**
- Entire form data (`form-data`)
- Current step (`current-step`)

### **When is it updated?**
- On every input change (`watch`)
- On step navigation

### **Why LocalStorage?**
- Instant
- No backend required
- User can refresh and continue without losing progress

---

## 6. Review Step Design

The Review screen:
- Shows all collected data grouped by section
- Allows editing specific sections via “Edit” buttons
- Sends users back to the appropriate step
- Continues preserving state in localStorage

This improves UX by ensuring no unnecessary navigation.

---

## 7. Accessibility (WCAG) Considerations

### Implemented Accessibility Features:
- All form fields have proper `<label>` tags
- Error messages use:
  - `role="alert"`
  - `aria-describedby`
- Keyboard navigation:
  - All interactive elements are keyboard-reachable
- Focus management:
  - When changing steps, focus moves to the first field
  - On validation errors, focus moves to the first invalid field
- High color contrast UI
- Responsive design for all screen sizes

---

## 8. UI / Styling Decisions

### Why Tailwind + Custom CSS?
- Faster design iteration
- Utility-first styling
- Custom theme variables for consistent colors, spacing, shadows
- Cleaner component code (presentation stays in CSS)

The final UI includes:
✔ Centered card layout  
✔ Smooth shadows  
✔ Gradient buttons  
✔ Animated transitions  
✔ Mobile-friendly responsive layout  

---

## 9. Animation (Framer Motion)

Used for:
- Slide transitions between steps
- Smooth fade animations  
- Better user flow experience (modern UX pattern)

Transition time kept low (0.22s) to avoid delay.

---

## 10. Deployment

Deployment is done on **Vercel**, chosen because:
- Zero config for Vite
- Automatic build & preview
- Clean production hosting
- Free for personal projects

---

## 11. Summary

This form demonstrates:
- Real-world multi-step form engineering
- Schema-driven validation
- State management best practices
- Accessibility compliance
- Smooth UX with persistence
- Professional responsive UI

The architecture is scalable, maintainable, and suited for production-grade forms.

