import React from 'react'
import './globals.css';

const page = () => {
  return (
<main className="bg-zinc-50 dark:bg-zinc-900 flex min-h-screen items-center justify-center">
   <div className="max-w-xs mx-auto">
      <h1 className="text-lg text-center text-zinc-900 dark:text-zinc-100">Dark mode example</h1>

      <p className="text-sm text-center text-zinc-700 dark:text-zinc-100">
        This is an example of how to implement dark mode in a Next.js app.
      </p>
    </div>
</main>
  )
}

export default page