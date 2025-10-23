const videoModal = () => {
    const videoBoxes = document.querySelectorAll('.js-video-item');
    const modal = document.querySelector('.js-video-modal');
    if (!modal || !videoBoxes.length) return;

    const closeBtn = modal.querySelector('.js-video-modal__close');
    const playBtn = modal.querySelector('.js-video-modal__play');
    const videoPlayer = modal.querySelector('#videoPlayer');
    const wrapper = modal.querySelector('.js-video-modal__wrapper');

    if (!closeBtn || !playBtn || !videoPlayer || !wrapper) return;

    videoBoxes.forEach((box) => {
        box.addEventListener('click', () => {
            const videoSrc = box.getAttribute('data-video');
            if (videoSrc) {
                videoPlayer.src = videoSrc;
                modal.classList.add('is-show');
                document.body.style.overflow = 'hidden';
                videoPlayer.pause();
                videoPlayer.removeAttribute('controls');
                playBtn.classList.remove('is-hide');
            }
        });
    });

    videoPlayer.addEventListener('play', () => {
        playBtn.classList.add('is-hide');
        wrapper.classList.add('play');
        videoPlayer.setAttribute('controls', '');
    });

    videoPlayer.addEventListener('pause', () => {
        playBtn.classList.remove('is-hide');
        wrapper.classList.remove('play');
        videoPlayer.removeAttribute('controls');
    });

    videoPlayer.addEventListener('ended', () => {
        playBtn.classList.remove('is-hide');
        wrapper.classList.remove('play');
        videoPlayer.removeAttribute('controls');
    });

    playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (videoPlayer.paused) {
            videoPlayer.play();
        } else {
            videoPlayer.pause();
        }
    });

    const closeModal = () => {
        document.body.style.overflow = '';
        modal.classList.remove('is-show');
        wrapper.classList.remove('play');
        setTimeout(() => {
            videoPlayer.pause();
            videoPlayer.removeAttribute('src');
            videoPlayer.load();
        }, 300);
    };

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (!wrapper.contains(e.target)) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-show')) {
            closeModal();
        }
    });
};

export default videoModal;
