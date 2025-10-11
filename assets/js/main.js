'use strict';

import headerFlow from './modules/_header.js';
import helpers from './modules/_helpers.js';
import sliders from './modules/_sliders.js';
import selectsInit from './modules/_selects.js';

document.addEventListener('DOMContentLoaded', () => {
    headerFlow();
    helpers();
    sliders();
    selectsInit();
});
