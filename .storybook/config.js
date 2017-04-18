import { configure, setAddon } from '@kadira/storybook'
import infoAddon from '@kadira/react-storybook-addon-info'

setAddon(infoAddon)

function loadStories() {
  require('../stories/')
  // require as many stories as you need.
}
configure(loadStories, module)
