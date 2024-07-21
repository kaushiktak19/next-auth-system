# Fullstack Authentication System

## Overview

This project is a simple authentication system built with Next.js and Redux. It includes user login functionality with error handling and toast notifications for user feedback.

## Changes and Updates

### 1. **Toast Notifications Integration**

- **Library Used:** [react-toastify](https://github.com/fkhadra/react-toastify)
- **Purpose:** Added toast notifications to provide feedback to users for various actions, such as login success, errors, and validation issues.
- **Implementation:**
  - Installed `react-toastify` and added it to the project.
  - Configured `ToastContainer` in the main layout to display notifications.
  - Updated the `HomePage` component to use `toast` for showing notifications on login success, validation errors, and failed login attempts.

### 2. **Error Handling and Validation**

- **Purpose:** Improved user experience by validating input fields and providing immediate feedback.
- **Changes:**
  - Added form validation to ensure both username and password fields are filled.
  - Used `toast.error` to notify users of validation errors, invalid credentials, and other issues during login.
  - Ensured error messages are shown below the input fields for better user feedback.
  - Added **dummy credentials** (`admin` / `password123`) in the **"Logging In"** section to provide users with sample login information.

### 3. **API Endpoint**

- **Endpoint:** `/api/login`
- **Method:** POST
- **Purpose:** Handles user authentication and returns a token upon successful login.
- **Error Handling:** Returns appropriate error messages for invalid credentials or failed login attempts.

## How to Use

### Running the Application

After cloning the repo in your local system - 

1. **Install Dependencies:**

   ```bash
   npm install
   ```

2. **Running app locally:**

   ```bash
   npm run dev
   ```
   This will start the application at http://localhost:3000.


