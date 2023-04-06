import Card from './Card.vue'

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {}
}

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args }
  },
  template: '<Card v-bind="args"></Card>'
})

export const Primary = Template.bind({})
Primary.args = {}
