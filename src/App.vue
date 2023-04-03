<script setup>
import IconCommunity from './components/icons/IconCommunity.vue'
import MyButton from './stories/Button.vue'
import NavBar from './stories/NavBar.vue'
const qwe = false
</script>

<template>
  <nav-bar color="red" :icon="IconCommunity"
    ><input />
    <my-button color="blue" :disable="qwe" size="base" :icon="IconCommunity">Hello</my-button>
    </nav-bar>
  <my-button color="blue" :disable="qwe" size="base" :icon="IconCommunity">Hello</my-button>
</template>

<style scoped></style>
