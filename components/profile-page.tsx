"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Settings, LogOut, Moon, Sun, Clock, Headphones, BarChart2 } from "lucide-react"
import { useTheme } from "next-themes"

export default function ProfilePage() {
  const { theme, setTheme } = useTheme()
  const [userName] = useState("Angad")

  const stats = {
    streak: 12,
    totalHours: 48,
    storiesCreated: 15,
    favoriteGenres: ["Fantasy", "Sci-Fi", "Mythology"],
  }

  const achievements = [
    {
      title: "Story Explorer",
      description: "Listened to 10 different stories",
      progress: 100,
      icon: "🔍",
    },
    {
      title: "Creative Mind",
      description: "Created 5 unique characters",
      progress: 80,
      icon: "🧠",
    },
    {
      title: "Daily Listener",
      description: "Listened for 7 consecutive days",
      progress: 100,
      icon: "🎧",
    },
    {
      title: "Genre Master",
      description: "Explored all available genres",
      progress: 60,
      icon: "📚",
    },
  ]

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Header */}
      <div className="flex justify-between items-center p-4 sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-10 border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="flex items-center gap-2">
          <User className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-pink-400">
            Profile
          </h1>
        </div>
      </div>

      {/* Profile Header */}
      <div className="p-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 flex items-center justify-center text-white font-bold text-2xl shadow-md">
            {userName[0]}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{userName}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">SunoBot Explorer</p>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-green-600 dark:text-green-400">{stats.streak} day streak</span>
            </div>
          </div>
        </div>

        <Tabs defaultValue="stats" className="w-full">
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="stats" className="mt-0 space-y-4">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-3">
              <Card className="p-3 bg-white dark:bg-gray-800 shadow-md rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  <h3 className="font-medium text-gray-900 dark:text-white text-sm">Total Hours</h3>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalHours}</p>
              </Card>

              <Card className="p-3 bg-white dark:bg-gray-800 shadow-md rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Headphones className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  <h3 className="font-medium text-gray-900 dark:text-white text-sm">Stories Created</h3>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.storiesCreated}</p>
              </Card>
            </div>

            {/* Favorite Genres */}
            <Card className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <BarChart2 className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <h3 className="font-medium text-gray-900 dark:text-white">Favorite Genres</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {stats.favoriteGenres.map((genre, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 text-sm"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </Card>

            {/* Achievements */}
            <Card className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl">
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xl">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="font-medium text-gray-900 dark:text-white text-sm">{achievement.title}</h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400">{achievement.progress}%</span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{achievement.description}</p>
                      <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full mt-1 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-violet-600 to-pink-600"
                          style={{ width: `${achievement.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-0 space-y-4">
            {/* Theme Toggle */}
            <Card className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {theme === "dark" ? (
                    <Moon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  ) : (
                    <Sun className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                  )}
                  <h3 className="font-medium text-gray-900 dark:text-white">Theme</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className={`px-3 py-1 rounded-full text-sm ${theme === "light" ? "bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                    onClick={() => setTheme("light")}
                  >
                    Light
                  </button>
                  <button
                    className={`px-3 py-1 rounded-full text-sm ${theme === "dark" ? "bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300" : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}`}
                    onClick={() => setTheme("dark")}
                  >
                    Dark
                  </button>
                </div>
              </div>
            </Card>

            {/* Account Settings */}
            <Card className="p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl">
              <div className="flex items-center gap-2 mb-3">
                <Settings className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <h3 className="font-medium text-gray-900 dark:text-white">Account Settings</h3>
              </div>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
                  <div>
                    <div className="font-medium">Edit Profile</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Change your name, bio, and profile picture
                    </div>
                  </div>
                </Button>

                <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
                  <div>
                    <div className="font-medium">Notification Settings</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Manage your notification preferences</div>
                  </div>
                </Button>

                <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
                  <div>
                    <div className="font-medium">Privacy Settings</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Control your data and privacy options
                    </div>
                  </div>
                </Button>
              </div>
            </Card>

            {/* Logout Button */}
            <Button
              variant="outline"
              className="w-full flex items-center gap-2 text-red-600 dark:text-red-400 border-red-200 dark:border-red-900/30 hover:bg-red-50 dark:hover:bg-red-900/10"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

