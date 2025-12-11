<<<<<<< HEAD
# Project Name
Short description and how to run:
- npm install
- npm run dev
=======
# Multi-Step Registration Form (React + Vite + Tailwind + RHF + Zod)

A fully functional **4-step multi-step registration form** built using **React, React Hook Form, Zod, TailwindCSS, LocalStorage Persistence, Zustand (optional), and Framer Motion animations**.

This project demonstrates **advanced form handling, validation, accessibility, smooth UX transitions, persistent state management, and a full review/edit flow**.

---

## íº€ Features

### âœ… Multi-Step Form  
- Step 1: Personal Information  
- Step 2: Address Details  
- Step 3: Account Creation  
- Step 4: Review & Submit  
- Progress indicator  
- Next/Previous navigation  
- Disabled Previous on Step 1  
- Submit button appears on step 4  

### âœ… Validation (Zod + React Hook Form)  
- Real-time per-field validation (onBlur)  
- Required fields  
- Email format check  
- Phone validation (10-digits)  
- Age â‰¥ 18 validation  
- Strong password rule  
- Confirm password match  
- Asynchronous username availability check  

### âœ… Data Persistence  
- Saves form data to **localStorage** on every change  
- Saves current step to **localStorage**  
- Reloading restores form automatically  
- Review screen shows all data grouped by section  
- Each section has an **Edit** option â†’ jumps to that step  

### âœ… Accessibility  
- Keyboard navigable  
- Proper labels + aria attributes  
- Focus auto-moves to first invalid field  
- Focus auto-moves to first field when step changes  

### âœ… UI & Transitions  
- TailwindCSS beautiful design  
- Smooth Framer Motion animations  
- Responsive layout  
- Buttons adapt for mobile  
- Clean card layout  

---

## í³ Project Structure

```
src/
 â”œâ”€â”€ components/
 â”‚    â”œâ”€â”€ Step1.jsx
 â”‚    â”œâ”€â”€ Step2.jsx
 â”‚    â”œâ”€â”€ Step3.jsx
 â”‚    â”œâ”€â”€ StepReview.jsx
 â”‚    â””â”€â”€ MultiStepForm.jsx
 â”œâ”€â”€ App.jsx
 â”œâ”€â”€ main.jsx
 â”œâ”€â”€ index.css
public/
```

---

## í» ï¸ Installation & Setup

### 1ï¸âƒ£ Install Dependencies
Run inside the project folder:

```sh
npm install
```

### 2ï¸âƒ£ Start Development Server
```sh
npm run dev
```

The app will open at:

```
http://localhost:5173
```

---

## í·ª Username Availability Simulation

We simulate async validation:

- If user enters: `admin`, `test`, or `user` â†’ **username unavailable**
- Anything else â†’ **available**

A delay of **500ms** mimics a backend API call.

---

## í³¦ Build for Production

```sh
npm run build
```

---

## í¼ Deployment Instructions

You can deploy on **Vercel**:

1. Push this project to GitHub.  
2. Go to https://vercel.com  
3. Create New Project â†’ Import GitHub repo.  
4. Build settings:  
   - Framework: **Vite**  
   - Output folder: **dist**  
5. Deploy.

After deployment:  
âœ” Add link inside your assignment submission.

---

## í¾¥ Demo Video (Assignment Requirement)

Record a **2â€“4 minute video** showing:

- Step navigation  
- Validation errors + success  
- Strong password enforcement  
- Username async check  
- Reloading page â†’ state restored  
- Review screen  
- Editing previous steps  
- Final successful submit  

Upload to Google Drive or YouTube.

---

## í·± DESIGN.md Summary (Architecture Overview)

This project uses:

### í·  State Management  
- React Hook Form controls form fields  
- Zod schema validates form data  
- localStorage persists data + step number  

### í¿— Component Architecture  
- MultiStepForm manages global logic  
- Step1/2/3 handle inputs only  
- StepReview shows final summary  
- Framer Motion handles transitions  

### â™¿ Accessibility  
- Labels + aria attributes  
- Focus automatically moves  
- Keyboard-friendly navigation  

---

## í³œ License

This project is part of an academic assignment and free for educational use.

---

## í±©â€í²» Author

*P.K.Sreenita**  
Multi-Step Form Assignment â€“ 2025
>>>>>>> fbb4955 (Complete multi-step registration form)
