// ConfirmationPopup.js

'use client';




// ConfirmationPopup.js

import React, { useEffect } from "react";
import styles from "../styles/ConfirmationPopup.module.scss";
import svg from '../public/boy-w-basketball.svg';
import Image from "next/image";


const ConfirmationPopup = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 20000); // Automatically close after 20 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${styles["popup-container"]} active`}>
      <div className={styles["popup-content"]}>
        <div className={styles["icon-container"]}>
          {/* Your first SVG icon goes here */}
        </div>
        <p>Reset password link has been sent to your email.</p>
        <div className={styles["creative-icon-container"]}>
          {/* Your creative SVG icon goes here */}
          <Image src={svg} height={400} width={400} className="boy-svg" />

        </div>
        <button className={styles["close-button"]} onClick={onClose}>
          {/* Your "X" icon SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          Close
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
