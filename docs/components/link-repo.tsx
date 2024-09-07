'use client'

import { Button, Select, SelectContent, SelectItem, SelectTrigger } from '@openlite/ui'
import Link from 'next/link'
import { ColorPicker } from './icons/color-picker'
import { Github } from './icons/github'
import type { Variant } from '@/stores/color-picker'
import useThemeStore from '@/stores/color-picker'

export function LinkRepo({ classes }: { classes: string }) {
  const { themes, setTheme, currentTheme } = useThemeStore()
  return (
    <div className={classes}>
      <Select value={currentTheme} onValueChange={(e: Variant) => setTheme(e)}>
        <SelectTrigger hiddenIcon size="icon">
          <ColorPicker />
        </SelectTrigger>
        <SelectContent>
          {themes.map((theme, index) => (
            <SelectItem value={theme.value} key={index}>{theme.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button asChild size="icon" outline="default" className="hover:bg-default hover:text-default-foreground">
        <Link href="https://github.com/openlitedotdev/ui">
          <Github />
        </Link>
      </Button>
    </div>
  )
}
