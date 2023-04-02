<template>
  <button
    type="button"
    :class="classes"
    class="focus:outline-none focus:ring-4 font-medium rounded-lg mr-2 mb-2 inline-flex items-center text-white"
    :disabled="disable"
  >
    <component :is="icon"></component>
    <slot />
  </button>
</template>

<!-- <script>
import '../index.css'
import './button.css'
import { useColor } from '../hooks/useColor'
import { useSize } from '../hooks/useSize'
import { reactive, computed } from 'vue'
import { defineAsyncComponent } from 'vue'

export default {
  name: 'my-button',

  props: {
    icon: {
      type: String,
      default: ''
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
  },
  setup(props) {
    props = reactive(props)
    const color = useColor(props.color, true)
    return {
      classes: computed(() => ({
        [color]: true,
        'cursor-not-allowed': props.disable,
        [useSize(props.size)]: true
      })),
      Icon: defineAsyncComponent(() => import('../components/icons/IconCommunity.vue'))
    }
  }
}
</script> -->

<script setup>
import '../index.css'
import './button.css'
import { useColor } from '../hooks/useColor'
import { useSize } from '../hooks/useSize'
import { reactive, computed } from 'vue'
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

// props: {
//   icon: {
//     type: String,
//     default: ''
//   },
//   size: {
//     type: String,
//     validator: function (value) {
//       return ['small', 'base', 'large', 'extraLarge'].indexOf(value) !== -1
//     }
//   },
//   color: {
//     type: String
//   },
//   disable: {
//     type: Boolean
//   }
// },
// setup(props) {
//   props = reactive(props)
//   const color = useColor(props.color, true)
//   return {
//     classes: computed(() => ({
//       [color]: true,
//       'cursor-not-allowed': props.disable,
//       [useSize(props.size)]: true
//     })),
//     Icon: defineAsyncComponent(() => import('../components/icons/IconCommunity.vue'))
//   }
// }
</script>
