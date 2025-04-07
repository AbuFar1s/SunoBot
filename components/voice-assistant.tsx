"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mic, Play, Pause, SkipBack, FileText, Save, Share2, X } from "lucide-react"

interface VoiceAssistantProps {
  onClose: () => void
}

export default function VoiceAssistant({ onClose }: VoiceAssistantProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [userInput, setUserInput] = useState("Tell me a mythological story in a funny way")

  // Simulated waveform data
  const [waveformData, setWaveformData] = useState<number[]>([])

  useEffect(() => {
    // Generate random waveform data for visualization
    if (isPlaying) {
      const interval = setInterval(() => {
        setWaveformData(Array.from({ length: 40 }, () => Math.random() * 100))
      }, 100)
      return () => clearInterval(interval)
    }
  }, [isPlaying])

  const handleMicClick = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      // Simulate recording for 3 seconds then stop
      setTimeout(() => {
        setIsRecording(false)
        setIsPlaying(true)
      }, 3000)
    }
  }

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="w-full max-w-md h-[90vh] bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 rounded-2xl overflow-hidden shadow-2xl relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 z-10">
          <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>

        {/* Header */}
        <div className="p-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-10 border-b border-gray-100 dark:border-gray-800 shadow-sm">
          <h1 className="text-xl font-bold text-center bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-pink-400">
            Talk to SunoBot
          </h1>
        </div>

        <div className="flex-1 flex flex-col p-4 gap-6 overflow-y-auto h-[calc(90vh-64px)]">
          {/* User Input */}
          <div className="self-end max-w-[80%]">
            <Card className="bg-gradient-to-r from-violet-600 to-pink-600 text-white p-3 rounded-t-lg rounded-bl-lg shadow-md">
              <p className="text-sm">{userInput}</p>
            </Card>
          </div>

          {/* Microphone Button */}
          <div className="flex items-center justify-center my-8">
            <button
              className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg transition-all ${
                isRecording
                  ? "bg-red-500 scale-110"
                  : "bg-gradient-to-r from-violet-600 to-pink-600 hover:scale-105 active:scale-95"
              }`}
              onClick={handleMicClick}
            >
              <Mic className={`w-10 h-10 text-white ${isRecording ? "animate-pulse" : ""}`} />
              {isRecording && (
                <>
                  <div className="absolute w-32 h-32 rounded-full bg-red-500/20 animate-ping"></div>
                  <div className="absolute w-40 h-40 rounded-full bg-red-500/10 animate-pulse"></div>
                </>
              )}
            </button>
          </div>

          {/* SunoBot Response */}
          <div className="self-start max-w-[80%]">
            <Card className="bg-gray-100 dark:bg-gray-800 p-3 rounded-t-lg rounded-br-lg shadow-md">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Once upon a time in ancient Greece, there was a god named Zeus who had a terrible habit of turning into
                animals to impress women. Talk about weird dating strategies!
              </p>

              {/* Waveform visualization */}
              <div className="h-12 flex items-center gap-[2px] my-2 bg-gray-200/50 dark:bg-gray-700/50 rounded-lg p-1">
                {waveformData.map((height, index) => (
                  <div
                    key={index}
                    className="w-1 bg-gradient-to-t from-violet-500 to-pink-500 rounded-full"
                    style={{
                      height: `${height}%`,
                      opacity: isPlaying ? 1 : 0.5,
                      transition: "height 0.1s ease",
                    }}
                  ></div>
                ))}
              </div>
            </Card>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-center gap-4 mt-auto">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors"
            >
              <SkipBack className="w-5 h-5" />
            </Button>
            <Button
              className="rounded-full w-12 h-12 bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 shadow-md hover:shadow-lg transition-shadow active:scale-95"
              onClick={togglePlayback}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors"
            >
              <FileText className="w-5 h-5" />
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-4 mb-6">
            <Button
              variant="outline"
              className="flex gap-2 rounded-full hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Save to Library</span>
            </Button>
            <Button
              variant="outline"
              className="flex gap-2 rounded-full hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

