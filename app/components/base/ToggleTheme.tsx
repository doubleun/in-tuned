'use client'

import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'

const initTheme = 'dark'

const getLocalStorageTheme = () => {
  if (typeof window !== 'undefined') return window.localStorage.getItem('theme')
  else return initTheme
}

const toggleLocalStorageTheme = () => {
  const currentDark = getLocalStorageTheme() === 'dark'
  if (currentDark) {
    window.localStorage.setItem('theme', 'light')
    document.documentElement.classList.remove('dark')
    return 'light'
  } else {
    window.localStorage.setItem('theme', 'dark')
    document.documentElement.classList.add('dark')
    return 'dark'
  }

  // // Whenever the user explicitly chooses light mode
  // localStorage.theme = 'light'
  // // Whenever the user explicitly chooses dark mode
  // localStorage.theme = 'dark'
  // // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem('theme')
}

type ToggleThemeProps = {
  className?: string | undefined
  showLabel?: boolean
}

function ToggleTheme({ className, showLabel }: ToggleThemeProps) {
  const [theme, setTheme] = useState<string | null>(initTheme)

  const handleToggleTheme = () => {
    const newTheme = toggleLocalStorageTheme()
    setTheme(newTheme)
  }

  const handleRenderThemeIcon = () => {
    let icon = <Moon />
    let label = 'Dark mode'
    if (theme === 'dark') {
      icon = <Sun />
      label = 'Light mode'
    }

    return (
      <div className="flex gap-1 items-center">
        {icon} {showLabel ? label : null}
      </div>
    )
  }

  return (
    <button className={className} onClick={handleToggleTheme}>
      {handleRenderThemeIcon()}
    </button>
  )
}
export default ToggleTheme
