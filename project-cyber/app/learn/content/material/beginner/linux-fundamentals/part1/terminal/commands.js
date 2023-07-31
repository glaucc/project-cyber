const commands = {
    'cat hello.txt' : "Hello, user!",
    ls: 'hello.txt',
    help: "List of available commands:\n- hello\n- help",
  };
  
  const defaultOutput = "Command not recognized. Type 'help' for available commands.";
  
  export const handleCommand = (input) => {
    const inputLowerCase = input.trim().toLowerCase();
    return commands[inputLowerCase] || defaultOutput;
  };
  