<template>
  <button
    type="button"
    :class="classes"
    class="focus:outline-none focus:ring-4 font-medium rounded-lg mr-2 mb-2 inline-flex items-center"
    :disabled="disable"
  >
    <div class="mr-2">
      <component :is="icon"></component>
    </div>
    <slot />
  </button>
</template>

<script setup>
import '../index.css'
import './button.css'
import { useColor } from '../hooks/useColor'
import { useSize } from '../hooks/useSize'
import { computed } from 'vue'
import { defineAsyncComponent } from 'vue'

const { icon, color, disable, size } = defineProps({
  icon: {
    type: Object
  },
  size: {
    type: String,
    validator: function (value) {
      return ['small', 'base', 'large', 'extraLarge'].indexOf(value) !== -1
    }
  },
  color: {
    type: String
  },
  disable: {
    type: Boolean
  }
})

const getColor = useColor()
const getSize = useSize()

const classes = computed(() => ({
  [getColor(color)]: true,
  'cursor-not-allowed': disable,
  [getSize(size)]: true
}))
</script>
