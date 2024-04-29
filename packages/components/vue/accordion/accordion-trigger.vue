<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { AccordionHeader, AccordionTrigger, type AccordionTriggerProps } from 'radix-vue'
import { accordionTrigger, cn } from '@openui-org/theme'

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="delegatedProps"
      :class="cn(accordionTrigger(), props.class)"
    >
      <slot />
      <slot name="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down size-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6" /></svg>
      </slot>
    </AccordionTrigger>
  </AccordionHeader>
</template>
