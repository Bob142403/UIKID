import Card from './Card.vue'

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    title: '',
    body: '',
    color: {
      control: {
        type: 'select'
      },
      options: ['blue', 'dark', 'light', 'green', 'yellow', 'purple', 'red']
    }
  }
}

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args }
  },
  template: '<Card v-bind="args"></Card>'
})

export const Primary = Template.bind({})
Primary.args = {
  title: 'Card Title',
  body: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
}
