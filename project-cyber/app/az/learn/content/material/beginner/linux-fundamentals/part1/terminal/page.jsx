'use client';

import { useState } from "react";
import styles from "./Terminal.module.scss";
import { handleCommand } from "./commands";

const Terminal = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const commandOutput = handleCommand(input);

    setOutput(commandOutput);
    setInput("");
  };

  return (
    <>
      <div className={styles.terminalContainer}>
        <div className={styles.output}>
          <pre className={styles.typingText}>{output}</pre> {/* Add typingText style */}
        </div>
        <form className={styles.inputForm} onSubmit={handleSubmit}>
          <span className={styles.terminalSymbol}>$</span>
          <input
            className={styles.inputPlace}
            type="text"
            value={input}
            onChange={handleInput}
            autoFocus
            style={{ color: "#00ff00" }} // Set the input text color to green (#00ff00)
          />
        </form>
      </div>
    </>
  );
};

export default Terminal;
