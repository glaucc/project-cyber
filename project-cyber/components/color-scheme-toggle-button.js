export default function ColorSchemeToggleButton() {
    return (
      <button
        type="button"
        aria-label="Toggle dark mode"
        className="px-2 py-1.5 rounded-sm bg-zinc-900 dark:bg-zinc-100"
      >
        <span className="inline-block text-sm dark:hidden text-zinc-100">Switch to Dark</span>
        <span className="hidden text-sm dark:inline-block text-zinc-800">Switch to Light</span>
      </button>
    );
  }