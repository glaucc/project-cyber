// ConfirmationPopup.js

'use client';




import React, { useEffect } from "react";
import styles from "../styles/ConfirmationPopup.module.scss";
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
        <p className="popup-text" style={{ fontWeight: 'bold' }}>Parolun sıfırlanması linki e-poçtunuza göndərildi</p>
        <div className={styles["creative-icon-container"]} className='postsvg'>
          {/* Your creative SVG icon goes here */}
          <object width={400} height={400} type="image/svg+xml" data="https://cdn.svgator.com/images/2023/03/message-delivered-to-mailbox-animation.svg" alt="Animated mail that flies and arrives at the mailbox" img width="100%">
<img  src="https://cdn.svgator.com/images/2023/03/message-delivered-to-mailbox-animation.svg" alt="Animated mail that flies and arrives at the mailbox"/>    
</object>
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
