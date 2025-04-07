"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Radio, BookOpen, Bookmark, Share2 } from "lucide-react"

interface SunoBotHomeProps {
  setActiveScreen: (screen: number) => void
}

export default function SunoBotHome({ setActiveScreen }: SunoBotHomeProps) {
  const [userName] = useState("Angad")

  const audioSnippets = [
    {
      title: "5-Minute Startup Insight",
      duration: "5:23",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Today's Pep Talk",
      duration: "3:45",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Quick Meditation",
      duration: "7:12",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const continuedStories = [
    {
      title: "The Lost Kingdom",
      episode: 3,
      progress: 65,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "Space Odyssey 2050",
      episode: 2,
      progress: 40,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "Mythical Creatures",
      episode: 5,
      progress: 80,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  // Update the featureBlocks array with better icons and colors
  const featureBlocks = [
    {
      title: "Personalize Your SunoBot",
      icon: (
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
          className="text-white"
        >
          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M12 2v2" />
          <path d="M12 22v-2" />
          <path d="m17 20.66-1-1.73" />
          <path d="M11 10.27 7 3.34" />
          <path d="m20.66 17-1.73-1" />
          <path d="m3.34 7 1.73 1" />
          <path d="M14 12h8" />
          <path d="M2 12h2" />
          <path d="m20.66 7-1.73 1" />
          <path d="m3.34 17 1.73-1" />
          <path d="m17 3.34-1 1.73" />
          <path d="m11 13.73-4 6.93" />
        </svg>
      ),
      color: "from-orange-500 to-orange-700",
      screen: 2,
    },
    {
      title: "Mood-Aware Audio",
      icon: (
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
          className="text-white"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" x2="9.01" y1="9" y2="9" />
          <line x1="15" x2="15.01" y1="9" y2="9" />
        </svg>
      ),
      color: "from-purple-600 to-purple-800",
      screen: 5,
    },
    {
      title: "Co-Creation Mode",
      icon: (
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
          className="text-white"
        >
          <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
          <path d="M17 3h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
          <path d="M12 12v9" />
          <path d="m8 17 4 4 4-4" />
          <path d="M12 3v9" />
        </svg>
      ),
      color: "from-teal-600 to-teal-800",
      screen: 4,
    },
    {
      title: "Weekly Recap",
      icon: (
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
          className="text-white"
        >
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
          <path d="M8 14h.01" />
          <path d="M12 14h.01" />
          <path d="M16 14h.01" />
          <path d="M8 18h.01" />
          <path d="M12 18h.01" />
          <path d="M16 18h.01" />
        </svg>
      ),
      color: "from-blue-800 to-navy-900",
      screen: 6,
    },
    {
      title: "Explore KukuVerse",
      icon: (
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
          className="text-white"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" x2="22" y1="12" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      color: "from-pink-600 to-red-700",
      screen: 7,
    },
  ]

  const getTimeOfDay = () => {
    const hour = new Date().getHours()
    if (hour < 12) return "Morning"
    if (hour < 18) return "Afternoon"
    return "Evening"
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Header */}
      <div className="flex justify-between items-center p-4 sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-10 border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-pink-400">
            Good {getTimeOfDay()}, {userName}!
          </h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 flex items-center justify-center text-white font-bold shadow-md">
          {userName[0]}
        </div>
      </div>

      {/* Personalized Audio Feed */}
      <section className="p-4">
        <div className="flex items-center gap-2 mb-3 bg-violet-50 dark:bg-violet-900/20 px-3 py-1.5 rounded-lg">
          <Radio className="w-5 h-5 text-pink-600 dark:text-pink-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Your Personalized Audio Feed</h2>
        </div>
        <div className="space-y-3">
          {audioSnippets.map((snippet, index) => (
            <Card
              key={index}
              className="p-3 flex items-center gap-3 bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow rounded-xl"
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden relative bg-gradient-to-br from-violet-200 to-pink-200 dark:from-violet-800 dark:to-pink-800 flex items-center justify-center shadow-inner">
                <Image
                  src={snippet.image || "/placeholder.svg"}
                  alt={snippet.title}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 dark:text-white">{snippet.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{snippet.duration}</p>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 flex items-center justify-center text-white shadow-md hover:shadow-lg transition-shadow active:scale-95">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <Bookmark className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Continue Your Story */}
      <section className="p-4">
        <div className="flex items-center gap-2 mb-3 bg-pink-50 dark:bg-pink-900/20 px-3 py-1.5 rounded-lg">
          <BookOpen className="w-5 h-5 text-pink-600 dark:text-pink-400" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Continue Your Story</h2>
          <div className="ml-auto flex items-center justify-center w-5 h-5 rounded-full bg-pink-600 text-white text-xs animate-pulse">
            1
          </div>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x">
          {continuedStories.map((story, index) => (
            <Card
              key={index}
              className="p-3 flex flex-col min-w-[160px] bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow rounded-xl snap-start"
            >
              <div className="w-full aspect-square rounded-lg overflow-hidden relative bg-gradient-to-br from-violet-200 to-pink-200 dark:from-violet-800 dark:to-pink-800 flex items-center justify-center mb-2 shadow-inner">
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  width={60}
                  height={60}
                  className="object-cover"
                />
              </div>
              <h3 className="font-medium text-gray-900 dark:text-white text-sm">{story.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">Episode {story.episode}</p>
              <div className="mt-2 bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-600 to-pink-600"
                  style={{ width: `${story.progress}%` }}
                ></div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-2 w-full text-xs hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors"
              >
                Resume
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="p-4">
        <div className="overflow-x-auto pb-2 -mx-1 px-1">
          <div className="grid grid-cols-2 gap-3">
            {featureBlocks.map((block, index) => (
              <button
                key={index}
                className={`p-4 rounded-xl bg-gradient-to-br ${block.color} text-white flex flex-col items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 h-24`}
                onClick={() => setActiveScreen(block.screen)}
              >
                <div className="w-8 h-8 flex items-center justify-center">{block.icon}</div>
                <span className="text-xs font-medium text-center">{block.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

