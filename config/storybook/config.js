import { configure } from '@kadira/storybook';

function loadStories() {
  require('../../shared/button.story.js')
}

configure(loadStories, module);