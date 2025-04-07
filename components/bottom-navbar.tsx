"use client"

import { Home, BookOpen, PlusCircle, User } from "lucide-react"

interface BottomNavbarProps {
  activeScreen: number
  setActiveScreen: (screen: number) => void
}

export default function BottomNavbar({ activeScreen, setActiveScreen }: BottomNavbarProps) {
  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: "Home", screen: 0 },
    { icon: <BookOpen className="w-5 h-5" />, label: "Library", screen: 8 },
    { icon: null, label: "", screen: -1 }, // Placeholder for mic button
    { icon: <PlusCircle className="w-5 h-5" />, label: "Create", screen: 9 },
    { icon: <User className="w-5 h-5" />, label: "Profile", screen: 10 },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 flex justify-around items-center px-4 z-10 shadow-md">
      {navItems.map((item, index) => (
        <button
          key={index}
          className={`flex flex-col items-center justify-center gap-1 transition-colors ${
            item.screen === activeScreen
              ? "text-violet-600 dark:text-violet-400"
              : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          } ${item.screen === -1 ? "opacity-0 pointer-events-none" : ""}`}
          onClick={() => item.screen !== -1 && setActiveScreen(item.screen)}
        >
          {item.icon}
          <span className="text-xs">{item.label}</span>
        </button>
      ))}
    </div>
  )
}

