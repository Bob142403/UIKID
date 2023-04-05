<template>
  <button
    id="dropdownDefaultButton"
    data-dropdown-toggle="dropdown"
    class="focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
    :class="classes"
    type="button"
  >
    {{ title }}
    <svg
      class="w-4 h-4 ml-2"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  </button>
  <div
    id="dropdown"
    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
  >
    <ul
      class="py-2 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownDefaultButton"
      @click="updateModelValue"
    >
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Dashboard</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Settings</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Earnings</a
        >
      </li>
      <li>
        <a
          href="#"
          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >Sign out</a
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import '../index.css'
import './button.css'
import { useColor } from '../hooks/useColor'
import { computed } from 'vue'

const { iconPosition, title, color, modelValue } = defineProps({
  iconPosition: {
    type: String
  },
  title: {
    type: String
  },
  color: {
    type: String
  },
  modelValue: {
    type: String
  }
})
const emit = defineEmits(['update:modelValue'])

function updateModelValue(event) {
  if (event.target.closest('li')) {
    emit('update:modelValue', event.target.innerHTML)
  }
}

const getColor = useColor()

const classes = computed(() => ({
  [getColor(color)]: true
}))
</script>
