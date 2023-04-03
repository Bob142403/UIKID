<script setup>
import IconCommunity from './components/icons/IconCommunity.vue'
import MyButton from './stories/Button.vue'
import NavBar from './stories/NavBar.vue'
const qwe = false
</script>

<template>
  <!-- <nav-bar color="blue" :icon="IconCommunity"
    ><li>
      <a
        href="#"
        class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
        aria-current="page"
        >Home</a
      >
    </li>
    <li>
      <a
        href="#"
        class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >About</a
      >
    </li>
    <li>
      <a
        href="#"
        class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >Services</a
      >
    </li>
    <li>
      <a
        href="#"
        class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >Pricing</a
      >
    </li>
    <li>
      <a
        href="#"
        class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >Contact</a
      >
    </li></nav-bar
  > -->
  <my-button color="blue" :disable="qwe" size="base" :icon="IconCommunity">Hello</my-button>
</template>

<style scoped></style>
