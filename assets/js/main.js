'use strict';

import headerFlow from './modules/_header.js';
import helpers from './modules/_helpers.js';
import sliders from './modules/_sliders.js';
import selectsInit from './modules/_selects.js';
import ddBlocks from './modules/_ddBlocks.js';
import videoModal from './modules/_videoModal.js';
import infoModals from './modules/_infoModals.js';
import reviewPage from './modules/_reviewPage.js';

document.addEventListener('DOMContentLoaded', () => {
    headerFlow();
    helpers();
    sliders();
    selectsInit();
    ddBlocks();
    videoModal();
    infoModals();
    reviewPage();
});
