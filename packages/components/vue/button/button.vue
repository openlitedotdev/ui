<script setup lang="ts">
import { button, cn } from '@openui-org/theme'

interface Props {
  color?: NonNullable<Parameters<typeof button>[0]>['color']
  size?: NonNullable<Parameters<typeof button>[0]>['size']
  as?: string
}

withDefaults(defineProps<Props>(), {
  as: 'button',
})
</script>

<template>
  <component
    :is="as"
    :class="cn(button({ color, size }), $attrs.class ?? '')"
  >
    <slot />
  </component>
</template>
