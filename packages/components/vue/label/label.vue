<script setup lang="ts">
import { Label } from 'radix-vue'
import { cn, label } from '@openui-org/theme'

interface Props {
  size?: NonNullable<Parameters<typeof label>[0]>['size']
  textColor?: NonNullable<Parameters<typeof label>[0]>['textColor']
}
withDefaults(defineProps<Props>(), {})
</script>

<template>
  <Label :class="cn(label({ size, textColor }, $attrs.class ?? ''))">
    <slot />
  </Label>
</template>