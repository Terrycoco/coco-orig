import { configure } from '@storybook/react';

//if using font awesome icons 
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//add icons to library here
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
library.add(faIgloo);


function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
