import MySpinner from './Spinner.vue'

export default {
  title: 'Example/MySpinner',
  component: MySpinner,
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

const Template = (args) => ({
  components: { MySpinner },
  setup() {
    return { args }
  },
  template: '<my-spinner v-bind="args" />'
})

export const Spinner = Template.bind({})
Spinner.args = {
  size: 'default',
  color: 'blue'
}
