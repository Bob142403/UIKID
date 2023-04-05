<script setup>
import { ref, watch } from 'vue'
import IconCommunity from './components/icons/IconCommunity.vue'
import MyButton from './stories/Button.vue'
import DropDown from './stories/DropDown.vue'
const qwe = ref('')
</script>

<template>
  <drop-down title="Hello" color="blue" v-model="qwe"></drop-down>
  <button>asdas</button>
</template>

<style scoped></style>
