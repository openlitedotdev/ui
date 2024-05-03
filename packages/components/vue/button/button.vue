<script setup lang="ts">
import { button, cn } from '@openui-org/theme'

interface Props {
  variant?: NonNullable<Parameters<typeof button>[0]>['variant']
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
    :class="cn(button({ variant, size }), $attrs.class ?? '')"
  >
    <slot />
  </component>
</template>
