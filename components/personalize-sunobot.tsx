"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Settings } from "lucide-react"

export default function PersonalizeSunoBot() {
  const [genres, setGenres] = useState<string[]>(["Business", "Motivation"])
  const [voiceStyle, setVoiceStyle] = useState("energetic")
  const [autoDetectMood, setAutoDetectMood] = useState(true)

  const genreOptions = ["Business", "Motivation", "Mythology", "News", "Fiction", "Wellness"]

  const voiceOptions = [
    { id: "calm", label: "Calm" },
    { id: "energetic", label: "Energetic" },
    { id: "youthful", label: "Youthful" },
    { id: "spiritual", label: "Spiritual" },
  ]

  const toggleGenre = (genre: string) => {
    if (genres.includes(genre)) {
      setGenres(genres.filter((g) => g !== genre))
    } else {
      setGenres([...genres, genre])
    }
  }

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Header */}
      <div className="p-4 sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-10 border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="flex items-center justify-center gap-2">
          <Settings className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          <h1 className="text-xl font-bold text-center bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-pink-400">
            Personalize Your Audio Companion
          </h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {/* Genre Preferences */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white bg-violet-50 dark:bg-violet-900/20 px-3 py-1.5 rounded-lg inline-block">
            Genre Preferences
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {genreOptions.map((genre) => (
              <Card
                key={genre}
                className={`p-3 flex items-center gap-2 cursor-pointer transition-all ${
                  genres.includes(genre)
                    ? "bg-gradient-to-r from-violet-50 to-violet-100 dark:from-violet-900/30 dark:to-violet-800/20 border-violet-200 dark:border-violet-700 shadow-md"
                    : "bg-white dark:bg-gray-800 hover:shadow-md"
                }`}
                onClick={() => toggleGenre(genre)}
              >
                <Checkbox
                  checked={genres.includes(genre)}
                  onCheckedChange={() => toggleGenre(genre)}
                  className="data-[state=checked]:bg-violet-600 data-[state=checked]:border-violet-600"
                />
                <Label className="cursor-pointer">{genre}</Label>
              </Card>
            ))}
          </div>
        </section>

        {/* Voice Style */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white bg-violet-50 dark:bg-violet-900/20 px-3 py-1.5 rounded-lg inline-block">
            Voice Style
          </h2>
          <RadioGroup value={voiceStyle} onValueChange={setVoiceStyle} className="space-y-3">
            {voiceOptions.map((option) => (
              <Card
                key={option.id}
                className={`p-3 flex items-center gap-2 cursor-pointer transition-all ${
                  voiceStyle === option.id
                    ? "bg-gradient-to-r from-violet-50 to-violet-100 dark:from-violet-900/30 dark:to-violet-800/20 border-violet-200 dark:border-violet-700 shadow-md"
                    : "bg-white dark:bg-gray-800 hover:shadow-md"
                }`}
                onClick={() => setVoiceStyle(option.id)}
              >
                <RadioGroupItem
                  value={option.id}
                  id={option.id}
                  className="data-[state=checked]:bg-violet-600 data-[state=checked]:border-violet-600"
                />
                <Label htmlFor={option.id} className="cursor-pointer flex-1">
                  {option.label}
                </Label>
                <div className="w-24 h-6 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                  <div className="h-full flex items-center">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-gradient-to-t from-violet-500 to-pink-500 mx-[1px] rounded-full"
                        style={{
                          height: `${
                            option.id === "calm"
                              ? "30%"
                              : option.id === "energetic"
                                ? `${60 + Math.random() * 40}%`
                                : option.id === "youthful"
                                  ? `${40 + Math.random() * 30}%`
                                  : `${20 + Math.random() * 60}%`
                          }`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </RadioGroup>
        </section>

        {/* Mood Detection */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white bg-violet-50 dark:bg-violet-900/20 px-3 py-1.5 rounded-lg inline-block">
            Mood Input Option
          </h2>
          <Card className="p-4 bg-white dark:bg-gray-800 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <Label htmlFor="mood-toggle" className="cursor-pointer">
                Auto-detect from voice
              </Label>
              <div className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id="mood-toggle"
                  className="sr-only peer"
                  checked={autoDetectMood}
                  onChange={() => setAutoDetectMood(!autoDetectMood)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-violet-300 dark:peer-focus:ring-violet-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-violet-600"></div>
              </div>
            </div>

            <div className={autoDetectMood ? "opacity-50 pointer-events-none" : ""}>
              <Label className="mb-2 block">Manual mood selection</Label>
              <div className="flex justify-between items-center">
                <span className="text-2xl">😴</span>
                <span className="text-2xl">😐</span>
                <span className="text-2xl">😄</span>
                <span className="text-2xl">😤</span>
              </div>
              <input
                type="range"
                min="1"
                max="4"
                value="3"
                disabled={autoDetectMood}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-violet-600"
              />
            </div>
          </Card>
        </section>
      </div>

      {/* Save Button */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <Button className="w-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 shadow-md hover:shadow-lg transition-shadow">
          Save Preferences
        </Button>
      </div>
    </div>
  )
}

