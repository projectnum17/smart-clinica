'use strict';

import animationHandler from './modules/animationHandler.js';
import headerFlow from './modules/header.js';
import helpers from './modules/helpers.js';
import sliders from './modules/sliders.js';
import selectsInit from './modules/selects.js';
import ddBlocks from './modules/ddBlocks.js';
import infoModals from './modules/infoModals.js';
import reviewPage from './modules/reviewPage.js';
import videoModal from './modules/videoModal.js';
import videoAsync from './modules/videoAsync.js';
import videoPlayer from './modules/videoPlayer.js';
import tineLine from './modules/timeLine.js';
import fancyBoxHandler from './modules/fancyBoxHandler.js';
import reviewBoxHandler from './modules/reviewBoxHandler.js';
import feedbackBoxHandler from './modules/feedbackBoxHandler.js';

document.addEventListener('DOMContentLoaded', () => {
    animationHandler();
    headerFlow();
    helpers();
    sliders();
    selectsInit();
    ddBlocks();
    infoModals();
    reviewPage();
    videoModal();
    videoAsync();
    videoPlayer();
    tineLine();
    fancyBoxHandler();
    reviewBoxHandler();
    feedbackBoxHandler();
});
