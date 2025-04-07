"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smile, Mic, Play } from "lucide-react"

export default function MoodAwareAudio() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null)
  const [isListening, setIsListening] = useState(false)

  const moods = [
    { emoji: "😴", label: "Tired", suggestions: ["Calming Nature Tale", "Gentle Meditation"] },
    { emoji: "😐", label: "Neutral", suggestions: ["Daily Reflection", "Mindful Moment"] },
    { emoji: "😄", label: "Happy", suggestions: ["Uplifting Story", "Comedy Byte"] },
    { emoji: "😤", label: "Frustrated", suggestions: ["Stress Relief", "Motivational Boost"] },
  ]

  const handleMoodSelect = (index: number) => {
    setSelectedMood(index)
  }

  const toggleVoiceDetection = () => {
    setIsListening(!isListening)
    if (!isListening) {
      // Simulate voice detection for 2 seconds
      setTimeout(() => {
        setIsListening(false)
        setSelectedMood(2) // Simulate detecting "Happy" mood
      }, 2000)
    }
  }

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Header */}
      <div className="p-4 sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-10 border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="flex items-center justify-center gap-2">
          <Smile className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          <h1 className="text-xl font-bold text-center bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-pink-400">
            How Are You Feeling Today?
          </h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Emoji Mood Selector */}
        <Card className="p-4 bg-white dark:bg-gray-800 mb-6 shadow-md rounded-xl">
          <div className="flex justify-between items-center mb-6">
            {moods.map((mood, index) => (
              <button
                key={index}
                className={`flex flex-col items-center gap-1 transition-all ${
                  selectedMood === index ? "scale-125" : "opacity-70 hover:opacity-100 hover:scale-110"
                }`}
                onClick={() => handleMoodSelect(index)}
              >
                <span className="text-3xl">{mood.emoji}</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">{mood.label}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Or detect from voice</span>
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full ${isListening ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" : "hover:bg-violet-50 dark:hover:bg-violet-900/20"} transition-colors`}
              onClick={toggleVoiceDetection}
            >
              <Mic className={`w-4 h-4 ${isListening ? "animate-pulse" : ""}`} />
            </Button>
          </div>
        </Card>

        {/* Suggested Audio Types */}
        {selectedMood !== null && (
          <div>
            <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white bg-pink-50 dark:bg-pink-900/20 px-3 py-1.5 rounded-lg inline-block">
              Suggested for you when you're feeling {moods[selectedMood].label.toLowerCase()}
            </h2>

            <div className="grid gap-3">
              {moods[selectedMood].suggestions.map((suggestion, index) => (
                <Card
                  key={index}
                  className="p-4 bg-gradient-to-r from-violet-50 to-pink-50 dark:from-violet-900/20 dark:to-pink-900/20 border-violet-100 dark:border-violet-800/30 shadow-md hover:shadow-lg transition-shadow rounded-xl"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{suggestion}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">5-10 min • Personalized</p>
                    </div>
                    <Button
                      size="icon"
                      className="rounded-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 h-10 w-10 shadow-md hover:shadow-lg transition-all hover:scale-105"
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}

              <Card className="p-4 bg-white dark:bg-gray-800 border-dashed shadow-sm hover:shadow-md transition-shadow rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Custom Audio Experience</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tell SunoBot exactly what you need</p>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-10 w-10 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors"
                  >
                    <Mic className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white bg-pink-50 dark:bg-pink-900/20 px-3 py-1.5 rounded-lg inline-block">
                Quick Play
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <Button className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 shadow-md hover:shadow-lg transition-all">
                  <Play className="w-4 h-4 mr-2" />
                  5-Min Boost
                </Button>
                <Button variant="outline" className="hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors">
                  <Play className="w-4 h-4 mr-2" />
                  Mood Shifter
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

