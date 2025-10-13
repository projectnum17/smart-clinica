const sliders = () => {
    if (typeof Swiper === 'undefined') return;

    const heroNewsSlider = () => {
        const sliderEl = document.querySelector('.js-news-slider');
        if (!sliderEl) return;

        new Swiper(sliderEl, {
            slidesPerView: 1,
            spaceBetween: 15,
            grabCursor: true,
            speed: 900,
            navigation: {
                prevEl: '.js-news-prev',
                nextEl: '.js-news-next',
            },
            pagination: {
                el: '.js-news-pag',
                type: 'bullets',
                clickable: true,
            },
        });
    };

    const doctorsSlider = () => {
        const sliderEl = document.querySelector('.js-doctors-slider');
        const navPanel = document.querySelector('.js-doctors-nav');
        if (!sliderEl || !navPanel) return;

        const slideCount = sliderEl.querySelectorAll('.swiper-slide');
        const sliderWrapper = sliderEl.querySelector('.swiper-wrapper');

        if (slideCount.length < 5) {
            navPanel.style.display = 'none';
            sliderWrapper.classList.add('is-centered');
        }

        new Swiper(sliderEl, {
            spaceBetween: 15,
            slidesPerView: 4,
            grabCursor: true,
            speed: 900,
            navigation: {
                prevEl: '.js-doctors-prev',
                nextEl: '.js-doctors-next',
            },
        });
    };

    const reviewsSlider = () => {
        const sliderEl = document.querySelector('.js-reviews-slider');
        const navPanel = document.querySelector('.js-reviews-nav');
        if (!sliderEl || !navPanel) return;

        const slideCount = sliderEl.querySelectorAll('.swiper-slide');
        const sliderWrapper = sliderEl.querySelector('.swiper-wrapper');

        if (slideCount.length < 5) {
            navPanel.style.display = 'none';
            sliderWrapper.classList.add('is-centered');
        }

        new Swiper(sliderEl, {
            spaceBetween: 20,
            slidesPerView: 4,
            grabCursor: true,
            speed: 900,
            navigation: {
                prevEl: '.js-reviews-prev',
                nextEl: '.js-reviews-next',
            },
            pagination: {
                el: '.js-reviews-progress',
                type: 'progressbar',
            },
        });
    };

    const spaceSlider = () => {
        const sliderEl = document.querySelector('.js-space-slider');
        const navPanel = document.querySelector('.js-space-nav');
        if (!sliderEl || !navPanel) return;

        const slideCount = sliderEl.querySelectorAll('.swiper-slide');
        const sliderWrapper = sliderEl.querySelector('.swiper-wrapper');

        if (slideCount.length < 5) {
            navPanel.style.display = 'none';
            sliderWrapper.classList.add('is-centered');
        }

        new Swiper(sliderEl, {
            spaceBetween: 20,
            slidesPerView: 'auto',
            grabCursor: true,
            speed: 900,
            navigation: {
                prevEl: '.js-space-prev',
                nextEl: '.js-space-next',
            },
            pagination: {
                el: '.js-space-progress',
                type: 'progressbar',
            },
        });
    };

    const partnersSlider = () => {
        const sliderEl = document.querySelector('.js-partners-slider');
        const navPanel = document.querySelector('.js-partners-nav');
        if (!sliderEl || !navPanel) return;

        const slideCount = sliderEl.querySelectorAll('.swiper-slide');
        const sliderWrapper = sliderEl.querySelector('.swiper-wrapper');

        if (slideCount.length <= 6) {
            navPanel.style.display = 'none';
            sliderWrapper.classList.add('is-centered');
        }

        new Swiper(sliderEl, {
            spaceBetween: 20,
            slidesPerView: 6,
            grabCursor: true,
            speed: 900,
            navigation: {
                prevEl: '.js-partners-prev',
                nextEl: '.js-partners-next',
            },
        });
    };

    const interestSlider = () => {
        const sliderEl = document.querySelector('.js-interest-slider');
        const navPanel = document.querySelector('.js-interest-nav');
        if (!sliderEl || !navPanel) return;

        const slideCount = sliderEl.querySelectorAll('.swiper-slide');
        const sliderWrapper = sliderEl.querySelector('.swiper-wrapper');

        if (slideCount.length <= 4) {
            navPanel.style.display = 'none';
            sliderWrapper.classList.add('is-centered');
        }

        new Swiper(sliderEl, {
            spaceBetween: 20,
            slidesPerView: 4,
            grabCursor: true,
            speed: 900,
            navigation: {
                prevEl: '.js-interest-prev',
                nextEl: '.js-interest-next',
            },
            pagination: {
                el: '.js-interest-progress',
                type: 'progressbar',
            },
        });
    };

    const certSlider = () => {
        const sliderEl = document.querySelector('.js-cert-slider');
        const navPanel = document.querySelector('.js-cert-nav');
        if (!sliderEl || !navPanel) return;

        const slideCount = sliderEl.querySelectorAll('.swiper-slide');
        const sliderWrapper = sliderEl.querySelector('.swiper-wrapper');

        if (slideCount.length < 3) {
            navPanel.style.display = 'none';
            sliderWrapper.classList.add('is-centered');
        }

        new Swiper(sliderEl, {
            spaceBetween: 20,
            slidesPerView: 'auto',
            grabCursor: true,
            speed: 900,
            navigation: {
                prevEl: '.js-cert-prev',
                nextEl: '.js-cert-next',
            },
        });
    };

    heroNewsSlider();
    doctorsSlider();
    reviewsSlider();
    spaceSlider();
    partnersSlider();
    interestSlider();
    certSlider();
};

export default sliders;
