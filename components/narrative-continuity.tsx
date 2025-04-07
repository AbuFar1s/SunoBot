"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Play } from "lucide-react"
import Image from "next/image"

export default function NarrativeContinuity() {
  const stories = [
    {
      title: "The Lost Kingdom",
      description: "A fantasy adventure in a forgotten realm",
      episode: 3,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Space Odyssey 2050",
      description: "Humanity's journey to the stars",
      episode: 2,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Mythical Creatures",
      description: "Legends come to life in modern times",
      episode: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Detective Chronicles",
      description: "Solving mysteries in the digital age",
      episode: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="p-4 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-10 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-center gap-2">
          <BookOpen className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          <h1 className="text-xl font-bold text-center bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-pink-400">
            Stories That Remember You
          </h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {stories.map((story, index) => (
            <Card key={index} className="p-4 flex gap-3 bg-white dark:bg-gray-800">
              <div className="w-20 h-20 rounded-lg overflow-hidden relative bg-gradient-to-br from-violet-100 to-pink-100 dark:from-violet-900 dark:to-pink-900 flex items-center justify-center">
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">{story.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{story.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 px-2 py-0.5 rounded-full">
                    Episode {story.episode}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {story.episode > 1 ? `${story.episode} episodes` : "1 episode"}
                  </span>
                </div>
              </div>
              <Button
                size="icon"
                className="rounded-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 h-10 w-10 flex-shrink-0"
              >
                <Play className="h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-6">
          <Card className="p-4 border-dashed border-2 border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Create New Story World</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Start a new adventure with SunoBot as your storyteller
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <span className="text-xs bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 px-3 py-1 rounded-full">
                  Sci-fi
                </span>
                <span className="text-xs bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 px-3 py-1 rounded-full">
                  Fantasy
                </span>
                <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">
                  Mystery
                </span>
                <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full">
                  Slice of Life
                </span>
              </div>
              <Button className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700">
                Create New Story
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

