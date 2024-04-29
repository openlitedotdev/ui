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
    class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
  >
    <div :class="cn(accordionContent(), props.class)">
      <slot />
    </div>
  </AccordionContent>
</template>
