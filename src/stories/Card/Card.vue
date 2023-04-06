<template>
  <div
    class="max-w-sm border border-gray-200 rounded-lg shadow "
    :class="getColor(color, true)"
  >
    <a href="#">
      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight">
          {{ title }}
        </h5>
      </a>
      <p class="mb-3 font-normal">
        {{ body }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { useColor } from '../../hooks/useColor'

const props = defineProps({
  title: {
    type: String
  },
  body: {
    type: String
  },
  color: {
    type: String
  }
})

const getColor = useColor()
</script>
