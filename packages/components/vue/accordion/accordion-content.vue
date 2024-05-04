<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { AccordionContent, type AccordionContentProps } from 'radix-vue'
import { accordionContent, cn } from '@openui-org/theme'

const props = defineProps<AccordionContentProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionContent
    v-bind="delegatedProps"
    :class="cn(accordionContent())"
  >
    <div :class="cn('pb-4 pt-0', props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
