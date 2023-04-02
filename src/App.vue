<script setup>
import IconCommunity from './components/icons/IconCommunity.vue'
import Button from './stories/Button.vue'
const qwe = false
</script>

<template>
  <Button size="base" color="blue" :disable="qwe" :icon="IconCommunity">Hello</Button>
</template>

<style scoped></style>
