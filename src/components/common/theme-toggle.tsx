"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Render a placeholder or null during SSR to avoid hydration mismatch
    return <Button variant="ghost" size="icon" className="w-9 h-9 opacity-0" disabled />;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
      className="rounded-full transition-all duration-300 ease-in-out hover:bg-accent/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {theme === "light" ? (
        <Moon className="h-[1.4rem] w-[1.4rem] transform transition-transform duration-500 ease-out" />
      ) : (
        <Sun className="h-[1.4rem] w-[1.4rem] transform transition-transform duration-500 ease-out" />
      )}
    </Button>
  )
}
