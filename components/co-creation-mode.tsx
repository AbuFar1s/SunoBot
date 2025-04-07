"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Sparkles, Play, Wand2 } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export default function CoCreationMode() {
  const [characterName, setCharacterName] = useState("")
  const [personalityTrait, setPersonalityTrait] = useState(50)
  const [worldType, setWorldType] = useState("future")
  const [prologueGenerated, setPrologueGenerated] = useState(false)

  const worldTypes = [
    { id: "future", label: "Future" },
    { id: "ancient", label: "Ancient" },
    { id: "urban", label: "Urban" },
    { id: "mythical", label: "Mythical" },
  ]

  const handleGeneratePrologue = () => {
    setPrologueGenerated(true)
  }

  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="p-4 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-10 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-center gap-2">
          <Wand2 className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          <h1 className="text-xl font-bold text-center bg-gradient-to-r from-violet-600 to-pink-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-pink-400">
            Build Your Own Story
          </h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {!prologueGenerated ? (
          <Card className="p-4 bg-white dark:bg-gray-800">
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
                <Label className="text-gray-900 dark:text-white">Personality Trait</Label>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1 mb-2">
                  <span>Introverted</span>
                  <span>Extroverted</span>
                </div>
                <Slider
                  value={[personalityTrait]}
                  min={0}
                  max={100}
                  step={1}
                  onValueChange={(value) => setPersonalityTrait(value[0])}
                  className="my-4"
                />
              </div>

              <div>
                <Label className="text-gray-900 dark:text-white mb-2 block">World Type</Label>
                <div className="grid grid-cols-2 gap-2">
                  {worldTypes.map((type) => (
                    <Button
                      key={type.id}
                      type="button"
                      variant={worldType === type.id ? "default" : "outline"}
                      className={worldType === type.id ? "bg-gradient-to-r from-violet-600 to-pink-600" : ""}
                      onClick={() => setWorldType(type.id)}
                    >
                      {type.label}
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 mt-4"
                onClick={handleGeneratePrologue}
                disabled={!characterName}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Generate Prologue
              </Button>
            </div>
          </Card>
        ) : (
          <div className="space-y-4">
            <Card className="p-4 bg-white dark:bg-gray-800">
              <h2 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                {characterName}'s Adventure Begins
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                In the{" "}
                {worldType === "future"
                  ? "gleaming metropolis of Neo-Tokyo"
                  : worldType === "ancient"
                    ? "ancient kingdom of Avaloria"
                    : worldType === "urban"
                      ? "bustling streets of New Manhattan"
                      : "mystical realm of Eldoria"}
                , {characterName} awakens to discover a world on the brink of change.
                {personalityTrait > 70
                  ? " With an outgoing spirit and magnetic personality,"
                  : personalityTrait < 30
                    ? " With a thoughtful demeanor and keen observational skills,"
                    : " With a balanced approach to life,"}{" "}
                our hero is about to embark on a journey that will test their limits and reveal hidden truths.
              </p>

              <div className="flex justify-center my-4">
                <div className="w-full h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center px-2">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-gradient-to-t from-violet-500 to-pink-500 mx-[1px] rounded-full"
                      style={{ height: `${20 + Math.random() * 60}%` }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <Button size="icon" variant="outline" className="rounded-full w-10 h-10">
                  <Play className="w-4 h-4" />
                </Button>
                <Button className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700">
                  Listen to Prologue
                </Button>
              </div>
            </Card>

            <Card className="p-4 bg-white dark:bg-gray-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">What happens next?</h3>

              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
                  <div>
                    <div className="font-medium">{characterName} discovers a hidden artifact</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      An ancient relic with mysterious powers
                    </div>
                  </div>
                </Button>

                <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
                  <div>
                    <div className="font-medium">{characterName} meets an enigmatic stranger</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Someone who knows more than they let on
                    </div>
                  </div>
                </Button>

                <Button variant="outline" className="w-full justify-start text-left h-auto py-3">
                  <div>
                    <div className="font-medium">{characterName} uncovers a conspiracy</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Nothing is as it seems in this world</div>
                  </div>
                </Button>
              </div>

              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate More Options
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

