"use client"

import { useState, useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import SunoBotHome from "@/components/sunobot-home"
import VoiceAssistant from "@/components/voice-assistant"
import PersonalizeSunoBot from "@/components/personalize-sunobot"
import NarrativeContinuity from "@/components/narrative-continuity"
import CoCreationMode from "@/components/co-creation-mode"
import MoodAwareAudio from "@/components/mood-aware-audio"
import WeeklyRecap from "@/components/weekly-recap"
import KukuVerse from "@/components/kukuverse"
import LibraryPage from "@/components/library-page"
import CreatePage from "@/components/create-page"
import ProfilePage from "@/components/profile-page"
import BottomNavbar from "@/components/bottom-navbar"
import { useTheme } from "next-themes"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  const [activeScreen, setActiveScreen] = useState(0)
  const [activeFeature, setActiveFeature] = useState(0)
  const { theme, setTheme } = useTheme()
  const [showVoiceAssistant, setShowVoiceAssistant] = useState(false)

  // Feature screens (for horizontal navigation)
  const featureScreens = [2, 5, 4, 6, 7] // Indices of feature screens in the main screens array

  const screens = [
    <SunoBotHome key="home" setActiveScreen={setActiveScreen} />,
    <VoiceAssistant key="voice" onClose={() => setShowVoiceAssistant(false)} />,
    <PersonalizeSunoBot key="personalize" />,
    <NarrativeContinuity key="narrative" />,
    <CoCreationMode key="co-creation" />,
    <MoodAwareAudio key="mood" />,
    <WeeklyRecap key="weekly" />,
    <KukuVerse key="kukuverse" />,
    <LibraryPage key="library" />,
    <CreatePage key="create" />,
    <ProfilePage key="profile" />,
  ]

  const handleFeatureNavigation = (direction: "prev" | "next") => {
    if (direction === "prev" && activeFeature > 0) {
      setActiveFeature(activeFeature - 1)
      setActiveScreen(featureScreens[activeFeature - 1])
    } else if (direction === "next" && activeFeature < featureScreens.length - 1) {
      setActiveFeature(activeFeature + 1)
      setActiveScreen(featureScreens[activeFeature + 1])
    }
  }

  // Update activeFeature when activeScreen changes
  useEffect(() => {
    const featureIndex = featureScreens.indexOf(activeScreen)
    if (featureIndex !== -1) {
      setActiveFeature(featureIndex)
    }
  }, [activeScreen])

  const handleMicClick = () => {
    setShowVoiceAssistant(true)
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="w-full max-w-md mx-auto h-screen overflow-hidden relative">
          

          {/* Main content */}
          <div className="h-full pb-24">{showVoiceAssistant ? screens[1] : screens[activeScreen]}</div>

          {/* Feature navigation (only show for feature screens) */}
          {featureScreens.includes(activeScreen) && (
            <div className="fixed bottom-16 left-0 right-0 flex justify-between items-center px-4 py-2 z-20">
              <button
                onClick={() => handleFeatureNavigation("prev")}
                className={`p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md ${activeFeature === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                disabled={activeFeature === 0}
              >
                <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>

              <div className="flex gap-1">
                {featureScreens.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${activeFeature === index ? "bg-violet-600 dark:bg-violet-400" : "bg-gray-300 dark:bg-gray-600"}`}
                  />
                ))}
              </div>

              <button
                onClick={() => handleFeatureNavigation("next")}
                className={`p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md ${activeFeature === featureScreens.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                disabled={activeFeature === featureScreens.length - 1}
              >
                <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          )}

          {/* Floating Mic Button */}
          {!showVoiceAssistant && (
            <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-20">
              <button
                className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                onClick={handleMicClick}
              >
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
                  className="w-6 h-6"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" x2="12" y1="19" y2="22" />
                </svg>
                <div className="absolute w-24 h-24 rounded-full bg-violet-500/20 animate-ping"></div>
                <div className="absolute w-32 h-32 rounded-full bg-violet-500/10 animate-pulse"></div>
              </button>
            </div>
          )}

          {/* Bottom Navigation */}
          <BottomNavbar activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
        </div>
      </main>
    </ThemeProvider>
  )
}

