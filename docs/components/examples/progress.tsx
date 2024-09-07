import { useEffect, useState } from 'react'
import { Progress } from '@openlite/ui'
import useThemeStore from '@/stores/color-picker'

export function ProgressDemo() {
  const [progress, setProgress] = useState(13)
  const { currentTheme } = useThemeStore()

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress variant={currentTheme} value={progress} className="w-[60%]" />
}
