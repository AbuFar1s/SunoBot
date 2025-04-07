"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Upload, Play, Clock } from "lucide-react"

export default function WeeklyRecap() {
  const weeklyHighlights = [
    "Listened to 5 episodes of 'Space Odyssey 2050'",
    "Created 2 new story worlds",
    "Spent 3.5 hours with SunoBot",
    "Explored the 'Mythical Creatures' series",
  ]

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="p-4 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-10 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-center gap-2">
          <Calendar className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          <h1 className="text-xl font-bold text-center bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-pink-400">
            Your Week as a Story
          </h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Weekly Recap Card */}
        <Card className="p-4 bg-gradient-to-br from-violet-50 to-pink-50 dark:from-violet-900/20 dark:to-pink-900/20 border-violet-100 dark:border-violet-800/30 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900 dark:text-white">This Week's Journey</h2>
            <span className="text-sm text-gray-500 dark:text-gray-400">Apr 1 - Apr 7</span>
          </div>

          <div className="space-y-2 mb-4">
            {weeklyHighlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{highlight}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
              <Clock className="w-4 h-4" />
              <span>10 min recap</span>
            </div>
            <Button
              size="sm"
              className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700"
            >
              <Play className="w-3 h-3 mr-1" />
              Listen Now
            </Button>
          </div>
        </Card>

        {/* Import Journal */}
        <Card className="p-4 bg-white dark:bg-gray-800 border-dashed mb-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Import Journal or Notes</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Upload your journal entries or weekly notes to enhance your audio recap
          </p>

          <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center">
            <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Drag and drop files here or click to browse</p>
            <Button variant="outline" size="sm">
              Upload Files
            </Button>
          </div>
        </Card>

        {/* Generate Recap */}
        <Card className="p-4 bg-white dark:bg-gray-800">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Customize Your Recap</h3>

          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="include-podcasts"
                className="rounded text-violet-600 focus:ring-violet-500"
                defaultChecked
              />
              <label htmlFor="include-podcasts" className="text-sm text-gray-700 dark:text-gray-300">
                Include podcast history
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="include-calendar"
                className="rounded text-violet-600 focus:ring-violet-500"
                defaultChecked
              />
              <label htmlFor="include-calendar" className="text-sm text-gray-700 dark:text-gray-300">
                Include calendar data
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="include-mood"
                className="rounded text-violet-600 focus:ring-violet-500"
                defaultChecked
              />
              <label htmlFor="include-mood" className="text-sm text-gray-700 dark:text-gray-300">
                Include mood tracking
              </label>
            </div>
          </div>

          <Button className="w-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700">
            Generate Weekly Audio Recap
          </Button>
        </Card>
      </div>
    </div>
  )
}

