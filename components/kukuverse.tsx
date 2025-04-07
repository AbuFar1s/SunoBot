"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Users, Trophy, Send, Play } from "lucide-react"
import Image from "next/image"

export default function KukuVerse() {
  const trendingStories = [
    {
      title: "The Last Guardian",
      author: "Maya S.",
      likes: 1243,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "Neon Dreams",
      author: "Raj K.",
      likes: 986,
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      title: "Whispers of Eternity",
      author: "Alex T.",
      likes: 754,
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  const characters = [
    {
      name: "Captain Nova",
      world: "Space Odyssey 2050",
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Elara the Wise",
      world: "Mythical Creatures",
      image: "/placeholder.svg?height=50&width=50",
    },
  ]

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="p-4 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-10 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-center gap-2">
          <Globe className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          <h1 className="text-xl font-bold text-center bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-pink-400">
            Explore the KukuVerse
          </h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Guest Character Crossover */}
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Guest Character Crossover</h2>
          </div>

          <Card className="p-4 bg-white dark:bg-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Send your character to a friend's story or invite their characters to yours
            </p>

            <div className="space-y-3 mb-4">
              {characters.map((character, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative bg-gradient-to-br from-violet-100 to-pink-100 dark:from-violet-900 dark:to-pink-900 flex items-center justify-center">
                      <Image
                        src={character.image || "/placeholder.svg"}
                        alt={character.name}
                        width={50}
                        height={50}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white text-sm">{character.name}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{character.world}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="flex gap-1 items-center">
                    <Send className="w-3 h-3" />
                    <span>Send</span>
                  </Button>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full">
              Create New Character
            </Button>
          </Card>
        </section>

        {/* Public Story Remix */}
        <section className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Trophy className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Trending Story Arcs</h2>
          </div>

          <div className="space-y-3">
            {trendingStories.map((story, index) => (
              <Card key={index} className="p-3 flex items-center gap-3 bg-white dark:bg-gray-800">
                <div className="w-12 h-12 rounded-lg overflow-hidden relative bg-gradient-to-br from-violet-100 to-pink-100 dark:from-violet-900 dark:to-pink-900 flex items-center justify-center">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    width={60}
                    height={60}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 dark:text-white">{story.title}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400">By {story.author}</p>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-pink-500"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{story.likes}</span>
                    </div>
                  </div>
                </div>
                <Button
                  size="icon"
                  className="rounded-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 h-8 w-8"
                >
                  <Play className="h-3 w-3" />
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Create Public Story */}
        <Card className="p-4 bg-gradient-to-br from-violet-100 to-pink-100 dark:from-violet-900/30 dark:to-pink-900/30 border-violet-200 dark:border-violet-800/30">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Share Your Creativity</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Create a public story arc that others can listen to and remix
          </p>
          <Button className="w-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700">
            Create Public Story Arc
          </Button>
        </Card>
      </div>
    </div>
  )
}

