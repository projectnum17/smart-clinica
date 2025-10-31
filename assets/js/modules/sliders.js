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
            breakpoints: {
                0: {
                    slidesPerView: 1.1,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 2.5,
                },
                992: {
                    spaceBetween: 15,
                    slidesPerView: 2.5,
                },
                1200: {
                    spaceBetween: 15,
                    slidesPerView: 4,
                },
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
            breakpoints: {
                0: {
                    slidesPerView: 1.1,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    spaceBetween: 15,
                    slidesPerView: 3,
                },
                1200: {
                    spaceBetween: 20,
                    slidesPerView: 4,
                },
            },
        });
    };

    const feedbacksSlider = () => {
        const sliderEl = document.querySelector('.js-feedback-slider');
        const navPanel = document.querySelector('.js-feedback-nav');
        if (!sliderEl || !navPanel) return;

        const slideCount = sliderEl.querySelectorAll('.swiper-slide');
        const sliderWrapper = sliderEl.querySelector('.swiper-wrapper');

        if (slideCount.length < 4) {
            navPanel.style.display = 'none';
            sliderWrapper.classList.add('is-centered');
        }

        new Swiper(sliderEl, {
            spaceBetween: 20,
            slidesPerView: 3,
            grabCursor: true,
            speed: 900,
            navigation: {
                prevEl: '.js-feedback-prev',
                nextEl: '.js-feedback-next',
            },
            pagination: {
                el: '.js-feedback-progress',
                type: 'progressbar',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    spaceBetween: 15,
                    slidesPerView: 2,
                },
                1200: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                },
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
            breakpoints: {
                0: {
                    spaceBetween: 12,
                },
                768: {
                    spaceBetween: 20,
                },
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
            breakpoints: {
                0: {
                    slidesPerView: 'auto',
                },
                768: {
                    slidesPerView: 6,
                },
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
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    spaceBetween: 15,
                    slidesPerView: 3,
                },
                1200: {
                    spaceBetween: 20,
                    slidesPerView: 4,
                },
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

    const internSLider = () => {
        const sliderEl = document.querySelector('.js-intern-slider');
        const navPanel = document.querySelector('.js-intern-nav');
        if (!sliderEl || !navPanel) return;

        const slideCount = sliderEl.querySelectorAll('.swiper-slide');
        const sliderWrapper = sliderEl.querySelector('.swiper-wrapper');

        if (slideCount.length < 7) {
            navPanel.style.display = 'none';
            sliderWrapper.classList.add('is-centered');
        }

        new Swiper(sliderEl, {
            spaceBetween: 20,
            slidesPerView: 6,
            grabCursor: true,
            speed: 900,
            navigation: {
                prevEl: '.js-intern-prev',
                nextEl: '.js-intern-next',
            },
            pagination: {
                el: '.js-intern-progress',
                type: 'progressbar',
            },
            breakpoints: {
                0: {
                    slidesPerView: 3,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 6,
                },
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
    feedbacksSlider();
    internSLider();
};

export default sliders;
