const helpers = () => {
    const groupElements = (options) => {
        const { containerSelector, itemSelector, wrapperClass, groupSize } =
            options;

        const container = document.querySelector(containerSelector);
        if (!container) return;

        const items = container.querySelectorAll(itemSelector);
        const itemsArray = Array.from(items);

        for (let i = 0; i < itemsArray.length; i += groupSize) {
            const wrapper = document.createElement('div');
            wrapper.classList.add(wrapperClass);

            const group = itemsArray.slice(i, i + groupSize);
            const firstItem = group[0];

            container.insertBefore(wrapper, firstItem);
            group.forEach((item) => wrapper.appendChild(item));
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

    showMoreHandler('.js-reviews-cards', '.card', '.js-reviews-more', 6, 5);
    showMoreHandler('.js-docs-list', '.info__item', '.js-docs-more', 8, 7);

    groupElements({
        containerSelector: '.js-table-grid',
        itemSelector: '.services-table__rect',
        wrapperClass: 'boxes-inner',
        groupSize: 6,
    });

    groupElements({
        containerSelector: '.js-team-grid',
        itemSelector: '.team__card',
        wrapperClass: 'team-inner',
        groupSize: 5,
    });
};

export default helpers;
