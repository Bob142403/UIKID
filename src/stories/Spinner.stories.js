import MySpinner from './Spinner.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/MySpinner',
  component: MySpinner,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'default', 'medium', 'large']
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['blue', 'gray', 'green', 'pink', 'yellow', 'purple', 'red']
    }
  }
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Spinner },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-spinner v-bind="args" />'
})

export const Spinner = Template.bind({})
// // More on args: https://storybook.js.org/docs/vue/writing-stories/args
Spinner.args = {
  size: 'default',
  color: 'blue'
}
