import { configure } from '@storybook/react';

//if using font awesome icons 
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//add icons to library here
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
library.add(faIgloo);

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}
// function loadStories() {
//   require('../src/components/buttons/buttons.stories.js');
// }

configure(loadStories, module);
