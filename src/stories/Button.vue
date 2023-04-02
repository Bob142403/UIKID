<template>
  <button
    type="button"
    :class="classes"
    class="focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script>
import '../index.css'
import './button.css'
import { reactive, computed } from 'vue'

export default { //asdadaasdasdasdas
  //asdasdsa
  //asdasdas
  //asdadsa
  name: 'my-button',

  props: {
    label: {
      type: String,
      required: true
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    },
    color: {
      type: String
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props)
    return {
      classes: computed(() => ({
        'bg-purple-700 hover:bg-purple-800 focus:ring-purple-300 text-white':
          props.color === 'purple',
        'text-white bg-red-700 hover:bg-red-800 focus:ring-red-300': 
          props.color === 'red',
        'text-white bg-green-700 hover:bg-green-800  focus:ring-green-300': 
          props.color === 'green',
        'text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300':
          props.color === 'yellow',
        'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200':
          props.color === 'light',
        'text-white bg-blue-700 hover:bg-blue-800  focus:ring-blue-300': 
          props.color === 'blue',
        'text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300': 
          props.color === 'dark',
        [`storybook-button--${props.size || 'medium'}`]: true
      })),
      onClick() {
        emit('click')
      }
    }
  }
}
</script>
