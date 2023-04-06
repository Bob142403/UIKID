import NavBar from './NavBar.vue'
import IconCommunity from '../../components/icons/IconCommunity.vue'

export default {
  title: 'Example/NavBar',
  component: NavBar,
  argTypes: {
    color: {
      control: {
        type: 'select'
      },
      options: ['blue', 'dark', 'light', 'green', 'yellow', 'purple', 'red']
    },
    title: ''
  },
  parameters: {
    layout: 'fullscreen'
  }
}

const Template = (args) => ({
  components: { NavBar },
  setup() {
    return { args }
  },
  template: '<NavBar v-bind="args"></NavBar>'
})

export const Navbar = Template.bind({})
Navbar.args = {
  color: 'blue',
  icon: IconCommunity
}
