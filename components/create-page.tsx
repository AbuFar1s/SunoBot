"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle, Sparkles, Wand2 } from "lucide-react"
import Image from "next/image"

export default function CreatePage() {
  const [characterName, setCharacterName] = useState("")

  const genreOptions = [
    { id: "scifi", label: "Sci-Fi", icon: "🚀" },
    { id: "fantasy", label: "Fantasy", icon: "🧙‍♂️" },
    { id: "mystery", label: "Mystery", icon: "🔍" },
    { id: "romance", label: "Romance", icon: "❤️" },
    { id: "horror", label: "Horror", icon: "👻" },
    { id: "comedy", label: "Comedy", icon: "😂" },
    { id: "drama", label: "Drama", icon: "🎭" },
    { id: "mythology", label: "Mythology", icon: "⚡" },
  ]

  const savedWorlds = [
    {
      title: "The Lost Kingdom",
      description: "A fantasy adventure in a forgotten realm",
      lastEdited: "2 days ago",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Space Odyssey 2050",
      description: "Humanity's journey to the stars",
      lastEdited: "1 week ago",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      title: "Mythical Creatures",
      description: "Legends come to life in modern times",
      lastEdited: "3 days ago",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Header */}
      <div className="flex justify-between items-center p-4 sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-10 border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="flex items-center gap-2">
          <PlusCircle className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-pink-400">
            Create New Journey
          </h1>
        </div>
      </div>

      <div className="p-4">
        <Tabs defaultValue="new" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="new">New World</TabsTrigger>
            <TabsTrigger value="saved">Saved Worlds</TabsTrigger>
          </TabsList>

          <TabsContent value="new" className="mt-0">
            <Card className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Create Your Character</h2>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="character-name" className="text-gray-900 dark:text-white">
                    Character Name
                  </Label>
                  <Input
                    id="character-name"
                    placeholder="Enter a name for your character"
                    value={characterName}
                    onChange={(e) => setCharacterName(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label className="text-gray-900 dark:text-white">Select Genre</Label>
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {genreOptions.map((genre) => (
                      <button
                        key={genre.id}
                        className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors"
                      >
                        <span className="text-2xl mb-1">{genre.icon}</span>
                        <span className="text-xs text-gray-700 dark:text-gray-300">{genre.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-gray-900 dark:text-white">Personality Traits</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <button className="px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 text-sm">
                      Brave
                    </button>
                    <button className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm">
                      Curious
                    </button>
                    <button className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm">
                      Intelligent
                    </button>
                    <button className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm">
                      Funny
                    </button>
                    <button className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm">
                      Mysterious
                    </button>
                    <button className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm">
                      Loyal
                    </button>
                    <button className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm">
                      Creative
                    </button>
                    <button className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm">
                      Resourceful
                    </button>
                  </div>
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 shadow-md hover:shadow-lg transition-shadow mt-6"
                disabled={!characterName}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Story
              </Button>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-violet-50 to-pink-50 dark:from-violet-900/20 dark:to-pink-900/20 border-violet-100 dark:border-violet-800/30 shadow-md rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Wand2 className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Quick Start</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Let SunoBot generate a random character and story for you based on your preferences.
              </p>
              <Button className="w-full bg-white dark:bg-gray-800 text-violet-600 dark:text-violet-400 hover:bg-gray-50 dark:hover:bg-gray-700 border border-violet-200 dark:border-violet-800/50">
                Surprise Me
              </Button>
            </Card>
          </TabsContent>

          <TabsContent value="saved" className="mt-0">
            <div className="space-y-3">
              {savedWorlds.map((world, index) => (
                <Card
                  key={index}
                  className="p-3 flex items-center gap-3 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow rounded-xl"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden relative bg-gradient-to-br from-violet-200 to-pink-200 dark:from-violet-800 dark:to-pink-800 flex items-center justify-center shadow-inner">
                    <Image
                      src={world.image || "/placeholder.svg"}
                      alt={world.title}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 dark:text-white">{world.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{world.description}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">Last edited: {world.lastEdited}</p>
                  </div>
                  <Button className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 shadow-sm">
                    Continue
                  </Button>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

