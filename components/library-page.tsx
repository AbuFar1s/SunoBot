"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Play, Trash2, Clock, Heart } from "lucide-react"
import Image from "next/image"

export default function LibraryPage() {
  const [view, setView] = useState<"grid" | "list">("grid")

  const savedContent = [
    {
      title: "The Lost Kingdom",
      type: "Story",
      duration: "15:23",
      lastPlayed: "2 days ago",
      image: "/placeholder.svg?height=80&width=80",
      favorite: true,
    },
    {
      title: "5-Minute Startup Insight",
      type: "Audio",
      duration: "5:23",
      lastPlayed: "Yesterday",
      image: "/placeholder.svg?height=80&width=80",
      favorite: false,
    },
    {
      title: "Mythical Creatures",
      type: "Story",
      duration: "23:45",
      lastPlayed: "3 days ago",
      image: "/placeholder.svg?height=80&width=80",
      favorite: true,
    },
    {
      title: "Today's Pep Talk",
      type: "Audio",
      duration: "3:45",
      lastPlayed: "Today",
      image: "/placeholder.svg?height=80&width=80",
      favorite: false,
    },
    {
      title: "Space Odyssey 2050",
      type: "Story",
      duration: "18:12",
      lastPlayed: "1 week ago",
      image: "/placeholder.svg?height=80&width=80",
      favorite: false,
    },
    {
      title: "Quick Meditation",
      type: "Audio",
      duration: "7:12",
      lastPlayed: "Today",
      image: "/placeholder.svg?height=80&width=80",
      favorite: true,
    },
  ]

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Header */}
      <div className="flex justify-between items-center p-4 sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-10 border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-pink-400">
            Your Library
          </h1>
        </div>
        <div className="flex gap-2">
          <button
            className={`p-2 rounded-md ${view === "grid" ? "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"}`}
            onClick={() => setView("grid")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="7" height="7" x="3" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <rect width="7" height="7" x="14" y="14" rx="1" />
              <rect width="7" height="7" x="3" y="14" rx="1" />
            </svg>
          </button>
          <button
            className={`p-2 rounded-md ${view === "list" ? "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400" : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"}`}
            onClick={() => setView("list")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="8" x2="21" y1="6" y2="6" />
              <line x1="8" x2="21" y1="12" y2="12" />
              <line x1="8" x2="21" y1="18" y2="18" />
              <line x1="3" x2="3.01" y1="6" y2="6" />
              <line x1="3" x2="3.01" y1="12" y2="12" />
              <line x1="3" x2="3.01" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      <div className="p-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="stories">Stories</TabsTrigger>
            <TabsTrigger value="audio">Audio</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            {view === "grid" ? (
              <div className="grid grid-cols-2 gap-3">
                {savedContent.map((item, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow rounded-xl"
                  >
                    <div className="relative">
                      <div className="w-full aspect-square bg-gradient-to-br from-violet-200 to-pink-200 dark:from-violet-800 dark:to-pink-800 flex items-center justify-center">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                      <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                        <Heart
                          className={`w-4 h-4 ${item.favorite ? "fill-pink-500 text-pink-500" : "text-gray-400"}`}
                        />
                      </button>
                    </div>
                    <div className="p-3">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-medium text-gray-900 dark:text-white text-sm line-clamp-1">{item.title}</h3>
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-1.5 py-0.5 rounded-full">
                          {item.type}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                          <Clock className="w-3 h-3" />
                          <span>{item.duration}</span>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            size="icon"
                            className="w-7 h-7 rounded-full bg-violet-600 hover:bg-violet-700 text-white"
                          >
                            <Play className="w-3 h-3" />
                          </Button>
                          <Button size="icon" variant="outline" className="w-7 h-7 rounded-full">
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {savedContent.map((item, index) => (
                  <Card
                    key={index}
                    className="p-3 flex items-center gap-3 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow rounded-xl"
                  >
                    <div className="w-14 h-14 rounded-lg overflow-hidden relative bg-gradient-to-br from-violet-200 to-pink-200 dark:from-violet-800 dark:to-pink-800 flex items-center justify-center shadow-inner">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={60}
                        height={60}
                        className="object-cover"
                      />
                      {item.favorite && (
                        <div className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center">
                          <Heart className="w-3 h-3 fill-pink-500 text-pink-500" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-gray-900 dark:text-white">{item.title}</h3>
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-1.5 py-0.5 rounded-full">
                          {item.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{item.duration}</span>
                        </div>
                        <span>Last played: {item.lastPlayed}</span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button size="icon" className="w-8 h-8 rounded-full bg-violet-600 hover:bg-violet-700 text-white">
                        <Play className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="outline" className="w-8 h-8 rounded-full">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="stories" className="mt-0">
            {view === "grid" ? (
              <div className="grid grid-cols-2 gap-3">
                {savedContent
                  .filter((item) => item.type === "Story")
                  .map((item, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow rounded-xl"
                    >
                      <div className="relative">
                        <div className="w-full aspect-square bg-gradient-to-br from-violet-200 to-pink-200 dark:from-violet-800 dark:to-pink-800 flex items-center justify-center">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            width={80}
                            height={80}
                            className="object-cover"
                          />
                        </div>
                        <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                          <Heart
                            className={`w-4 h-4 ${item.favorite ? "fill-pink-500 text-pink-500" : "text-gray-400"}`}
                          />
                        </button>
                      </div>
                      <div className="p-3">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-medium text-gray-900 dark:text-white text-sm line-clamp-1">
                            {item.title}
                          </h3>
                          <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-1.5 py-0.5 rounded-full">
                            {item.type}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                            <Clock className="w-3 h-3" />
                            <span>{item.duration}</span>
                          </div>
                          <div className="flex gap-1">
                            <Button
                              size="icon"
                              className="w-7 h-7 rounded-full bg-violet-600 hover:bg-violet-700 text-white"
                            >
                              <Play className="w-3 h-3" />
                            </Button>
                            <Button size="icon" variant="outline" className="w-7 h-7 rounded-full">
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            ) : (
              <div className="space-y-3">
                {savedContent
                  .filter((item) => item.type === "Story")
                  .map((item, index) => (
                    <Card
                      key={index}
                      className="p-3 flex items-center gap-3 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow rounded-xl"
                    >
                      <div className="w-14 h-14 rounded-lg overflow-hidden relative bg-gradient-to-br from-violet-200 to-pink-200 dark:from-violet-800 dark:to-pink-800 flex items-center justify-center shadow-inner">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={60}
                          height={60}
                          className="object-cover"
                        />
                        {item.favorite && (
                          <div className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center">
                            <Heart className="w-3 h-3 fill-pink-500 text-pink-500" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium text-gray-900 dark:text-white">{item.title}</h3>
                          <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-1.5 py-0.5 rounded-full">
                            {item.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{item.duration}</span>
                          </div>
                          <span>Last played: {item.lastPlayed}</span>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button
                          size="icon"
                          className="w-8 h-8 rounded-full bg-violet-600 hover:bg-violet-700 text-white"
                        >
                          <Play className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="outline" className="w-8 h-8 rounded-full">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="audio" className="mt-0">
            {view === "grid" ? (
              <div className="grid grid-cols-2 gap-3">
                {savedContent
                  .filter((item) => item.type === "Audio")
                  .map((item, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow rounded-xl"
                    >
                      <div className="relative">
                        <div className="w-full aspect-square bg-gradient-to-br from-violet-200 to-pink-200 dark:from-violet-800 dark:to-pink-800 flex items-center justify-center">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            width={80}
                            height={80}
                            className="object-cover"
                          />
                        </div>
                        <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                          <Heart
                            className={`w-4 h-4 ${item.favorite ? "fill-pink-500 text-pink-500" : "text-gray-400"}`}
                          />
                        </button>
                      </div>
                      <div className="p-3">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-medium text-gray-900 dark:text-white text-sm line-clamp-1">
                            {item.title}
                          </h3>
                          <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-1.5 py-0.5 rounded-full">
                            {item.type}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                            <Clock className="w-3 h-3" />
                            <span>{item.duration}</span>
                          </div>
                          <div className="flex gap-1">
                            <Button
                              size="icon"
                              className="w-7 h-7 rounded-full bg-violet-600 hover:bg-violet-700 text-white"
                            >
                              <Play className="w-3 h-3" />
                            </Button>
                            <Button size="icon" variant="outline" className="w-7 h-7 rounded-full">
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
              </div>
            ) : (
              <div className="space-y-3">
                {savedContent
                  .filter((item) => item.type === "Audio")
                  .map((item, index) => (
                    <Card
                      key={index}
                      className="p-3 flex items-center gap-3 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow rounded-xl"
                    >
                      <div className="w-14 h-14 rounded-lg overflow-hidden relative bg-gradient-to-br from-violet-200 to-pink-200 dark:from-violet-800 dark:to-pink-800 flex items-center justify-center shadow-inner">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={60}
                          height={60}
                          className="object-cover"
                        />
                        {item.favorite && (
                          <div className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center">
                            <Heart className="w-3 h-3 fill-pink-500 text-pink-500" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium text-gray-900 dark:text-white">{item.title}</h3>
                          <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-1.5 py-0.5 rounded-full">
                            {item.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{item.duration}</span>
                          </div>
                          <span>Last played: {item.lastPlayed}</span>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button
                          size="icon"
                          className="w-8 h-8 rounded-full bg-violet-600 hover:bg-violet-700 text-white"
                        >
                          <Play className="w-4 h-4" />
                        </Button>
                        <Button size="icon" variant="outline" className="w-8 h-8 rounded-full">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </Card>
                  ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

