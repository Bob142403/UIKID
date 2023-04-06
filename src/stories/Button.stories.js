import Button from './Button.vue'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    disable: true,
    size: {
      control: { type: 'select' },
      options: ['small', 'base', 'large', 'extraLarge']
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['blue', 'dark', 'light', 'green', 'yellow', 'purple', 'red']
    }
  }
}

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: '<Button v-bind="args">Hello</Button>'
})

export const Primary = Template.bind({})
Primary.args = {
  color: 'blue',
  disable: false,
  size: 'base'
}
