'use client';




// ForgotPasswordPage.js
// pages/forgotpassword/index.js
import React, { useState } from "react";
import Link from "next/link";
import styles from "./ForgotPasswordPage.module.scss";
import ConfirmationPopup from "../../../components/ConfirmationPopup";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setShowConfirmation(true);
    }, 1000);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
  };

  return (
    <div className={styles["forgot-password-container"]}>
      <form className={styles["forgot-password-form"]} onSubmit={handleSubmit}>
        <h2 style={{ marginBottom: "20px", fontWeight: 600 }}>Forgot Password</h2>
        <input
          className={styles["forgot-password-input"]}
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={styles["forgot-password-button"]}
          type="submit"
        >
          Reset Password
        </button>
        <Link href="/login">
          <a className={styles["back-to-login-link"]}>Back to Login</a>
        </Link>
      </form>
      {showConfirmation && <ConfirmationPopup onClose={handleCloseConfirmation} />}
    </div>
  );
};

export default ForgotPasswordPage;
