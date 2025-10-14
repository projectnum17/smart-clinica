const helpers = () => {
    const drawBorderForTable = () => {
        const servicesList = document.querySelector('.js-table-grid');
        if (!servicesList) return;

        const servicesBox = servicesList.querySelectorAll(
            '.services-table__rect'
        );

        const boxesArray = Array.from(servicesBox);

        for (let i = 0; i < boxesArray.length; i += 6) {
            const wrapper = document.createElement('div');
            wrapper.classList.add('boxes-inner');

            const group = boxesArray.slice(i, i + 6);

            const firstBox = group[0];
            servicesList.insertBefore(wrapper, firstBox);

            group.forEach((box) => wrapper.appendChild(box));
        }
    };

    const showMoreHandler = (
        parentSelector,
        childSelector,
        trigger,
        visibleCount,
        totalThreshold
    ) => {
        const servicesList = document.querySelector(parentSelector);
        const handleServicesMore = document.querySelector(trigger);

        if (!servicesList || !handleServicesMore) return;

        const serviceBoxes = servicesList.querySelectorAll(childSelector);

        if (serviceBoxes.length <= visibleCount) {
            handleServicesMore.style.display = 'none';
            return;
        }

        serviceBoxes.forEach((box, i) => {
            if (i > totalThreshold) {
                box.style.display = 'none';
            }
        });

        servicesList.classList.add('is-overlay');

        handleServicesMore.addEventListener('click', () => {
            serviceBoxes.forEach((box) => (box.style.display = ''));
            servicesList.classList.remove('is-overlay');
            handleServicesMore.style.display = 'none';
        });
    };

    const formData = () => {
        const formData = document.querySelectorAll('form');
        if (!formData.length) return;

        formData.forEach((form) => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
            });
        });
    };

    const datePickHandler = () => {
        const dateInput = document.querySelector('#mainAppDate');
        const dateWrapper = document.querySelector('.js-date-picker');

        if (!dateInput || !dateWrapper) return;

        dateInput.addEventListener('keydown', (e) => e.preventDefault());
        dateInput.addEventListener('keypress', (e) => e.preventDefault());
        dateInput.addEventListener('paste', (e) => e.preventDefault());

        dateWrapper.addEventListener('click', () => {
            if (dateInput.showPicker) {
                dateInput.showPicker();
            } else {
                dateInput.focus();
                dateInput.click();
            }
        });
    };

    const aboutMoreText = () => {
        const parent = document.querySelector('.js-text-more');
        if (!parent) return;

        const dElements = parent.querySelectorAll('div');
        const pElements = parent.querySelectorAll('.about__paragraph');
        const showMore = document.querySelector('.js-about-more');

        if (!pElements.length || !showMore) return;

        dElements.forEach((div, index) => {
            if (index < 2) {
                div.classList.add('is-active');
            }
        });

        if (pElements.length <= 2) {
            showMore.style.display = 'none';
            return;
        }

        pElements.forEach((p, i) => {
            if (i > 1) p.style.display = 'none';
        });

        showMore.addEventListener('click', () => {
            pElements.forEach((p, i) => {
                if (i > 1) p.style.display = '';
            });

            dElements.forEach((div, index) => {
                if (index > 1) div.classList.add('is-active');
            });

            parent.classList.add('is-shown');
            showMore.classList.add('is-hide');
        });
    };

    formData();
    showMoreHandler();
    drawBorderForTable();
    datePickHandler();
    aboutMoreText();
    showMoreHandler(
        '.js-doctors-list',
        '.doctor-box',
        '.js-doctors-more',
        12,
        11
    );
    showMoreHandler(
        '.js-smart-services',
        '.services-table__rect',
        '.js-smart-more',
        24,
        23
    );
    showMoreHandler(
        '.js-offers-list',
        '.interest-box',
        '.js-offers-more',
        12,
        11
    );
};

export default helpers;
