import NavBar from './NavBar.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/NavBar',
  component: NavBar,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    color: {
      control: {
        type: 'select'
      },
      options: ['blue', 'dark', 'light', 'green', 'yellow', 'purple', 'red']
    },
    title: ''
  }
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { NavBar },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<NavBar v-bind="args"></NavBar>'
})

export const NavBar1 = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
NavBar1.args = {
  color: 'blue'
}
// длина хук color хук disable icon children
