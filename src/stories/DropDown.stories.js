import DropDown from './DropDown.vue'

export default {
  title: 'Example/DropDown',
  component: DropDown,
  argTypes: {
    iconPosition: {
      control: { type: 'select' },
      options: ['right', 'left']
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
  components: { DropDown },
  setup() {
    return { args }
  },
  template: '<DropDown v-bind="args"></DropDown>'
})

export const Drop = Template.bind({})
Drop.args = {
  color: 'blue',
  title: 'Hello'
}
