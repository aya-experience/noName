import { configure } from '@storybook/react';
import './../static/css/bulma.min.css';
import './../static/css/ionicons.min.css';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
