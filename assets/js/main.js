'use strict';

import headerFlow from './modules/header.js';
import helpers from './modules/helpers.js';
import sliders from './modules/sliders.js';
import selectsInit from './modules/selects.js';
import ddBlocks from './modules/ddBlocks.js';
import videoModal from './modules/videoModal.js';
import infoModals from './modules/infoModals.js';
import reviewPage from './modules/reviewPage.js';
import videoAsync from './modules/videoAsync.js';
import tineLine from './modules/timeLine.js';

document.addEventListener('DOMContentLoaded', () => {
    headerFlow();
    helpers();
    sliders();
    selectsInit();
    ddBlocks();
    videoModal();
    infoModals();
    reviewPage();
    videoAsync();
    tineLine();
});
