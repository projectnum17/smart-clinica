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
    const showMoreServices = (
        parentSelector,
        childSelector,
        trigger,
        desktopVisible,
        desktopThreshold,
        mobileVisible,
        mobileThreshold,
        scrollTargetSelector
    ) => {
        const servicesList = document.querySelector(parentSelector);
        const handleServicesMore = document.querySelector(trigger);
        const scrollTarget = scrollTargetSelector
            ? document.querySelector(scrollTargetSelector)
            : null;

        if (!servicesList || !handleServicesMore) return;

        const serviceBoxes = servicesList.querySelectorAll(childSelector);

        const isMobile = window.matchMedia('(max-width: 767px)').matches;

        const visibleCount = isMobile ? mobileVisible : desktopVisible;
        const totalThreshold = isMobile ? mobileThreshold : desktopThreshold;

        if (serviceBoxes.length <= visibleCount) {
            handleServicesMore.style.display = 'none';
            return;
        }

        const hideExtraItems = () => {
            serviceBoxes.forEach((box, i) => {
                box.style.display = i > totalThreshold ? 'none' : '';
            });
            servicesList.classList.add('is-overlay');
            handleServicesMore.classList.remove('is-active');
        };

        const showAllItems = () => {
            serviceBoxes.forEach((box) => (box.style.display = ''));
            servicesList.classList.remove('is-overlay');
            handleServicesMore.classList.add('is-active');
        };

        hideExtraItems();

        handleServicesMore.addEventListener('click', () => {
            if (handleServicesMore.classList.contains('is-active')) {
                hideExtraItems();
                if (scrollTarget) {
                    scrollTarget.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            } else {
                showAllItems();
            }
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

    const initAttentionMove = () => {
        const containers = document.querySelectorAll('.js-attention-parent');
        const mobileQuery = window.matchMedia('(max-width: 767px)');

        const handleMove = (e) => {
            containers.forEach((parent) => {
                const attention = parent.querySelector('.js-attention');
                const firstCol = parent.querySelector(
                    '.info__box-col:first-child'
                );

                if (!attention || !firstCol) return;

                if (e.matches) {
                    parent.appendChild(attention);
                } else {
                    firstCol.appendChild(attention);
                }
            });
        };

        mobileQuery.addEventListener('change', handleMove);

        handleMove(mobileQuery);
    };

    initAttentionMove();

    const aboutMoreText = () => {
        const parent = document.querySelector('.js-text-more');
        if (!parent) return;

        const dElements = parent.querySelectorAll('div');
        const pElements = parent.querySelectorAll('.about__paragraph');
        const showMore = document.querySelector('.js-about-more');

        if (!pElements.length || !showMore) return;

        dElements.forEach((div, index) => {
            div.classList.toggle('is-active', index < 2);
        });

        if (pElements.length <= 2) {
            showMore.style.display = 'none';
            return;
        }

        showMore.addEventListener('click', () => {
            const isShown = parent.classList.toggle('is-shown');

            dElements.forEach((div, index) => {
                if (index > 1) div.classList.toggle('is-active', isShown);
            });

            showMore.classList.toggle('is-hide', isShown);
        });
    };

    const copyHandler = () => {
        const copyItems = document.querySelectorAll('.js-copy');
        if (!copyItems.length) return;

        copyItems.forEach((item) => {
            item.addEventListener('click', () => {
                if (item.classList.contains('is-copying')) return;
                item.classList.add('is-copying');

                const target = item.querySelector('.js-copy__target');
                if (!target) return;

                const textToCopy = target.innerText.replace(/\s+/g, ' ').trim();

                const loader = document.createElement('span');
                loader.className = 'copy-loader';
                item.appendChild(loader);

                navigator.clipboard
                    .writeText(textToCopy)
                    .then(() => {
                        item.classList.add('is-copy');
                        setTimeout(
                            () => item.classList.remove('is-copy'),
                            1500
                        );
                    })
                    .catch((error) => {
                        alert(`Sorry, ${error}`);
                    })
                    .finally(() => {
                        loader.remove();
                        item.classList.remove('is-copying');
                    });
            });
        });
    };

    const anchorPanel = () => {
        const anchorBox = document.querySelector('.js-anchor-panel');
        const mobileParent = document.querySelector('.js-anchor-parent');

        if (!anchorBox || !mobileParent) return;

        const anchorItems = anchorBox.querySelectorAll('a');
        if (!anchorItems.length) return;

        const desktopParent = anchorBox.parentElement;
        const desktopNextSibling = anchorBox.nextElementSibling;

        anchorItems[0].classList.add('is-current');

        anchorItems.forEach((item) => {
            item.addEventListener('click', () => {
                anchorItems.forEach((el) => el.classList.remove('is-current'));
                item.classList.add('is-current');

                item.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center',
                });
            });
        });

        let isMobileState = null;

        const updatePosition = () => {
            const isMobile = window.innerWidth <= 767;
            if (isMobile === isMobileState) return;

            isMobileState = isMobile;

            if (isMobile) {
                mobileParent.append(anchorBox);
            } else {
                if (desktopNextSibling) {
                    desktopParent.insertBefore(anchorBox, desktopNextSibling);
                } else {
                    desktopParent.append(anchorBox);
                }
            }
        };

        updatePosition();
        window.addEventListener('resize', updatePosition);
    };

    // Old init (delete in the feature)

    // const datePickerHandler = () => {
    //     const datepickerLocales = {
    //         uk: {
    //             days: [
    //                 'Неділя',
    //                 'Понеділок',
    //                 'Вівторок',
    //                 'Середа',
    //                 'Четвер',
    //                 'П’ятниця',
    //                 'Субота',
    //             ],
    //             daysShort: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    //             daysMin: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    //             months: [
    //                 'Січень',
    //                 'Лютий',
    //                 'Березень',
    //                 'Квітень',
    //                 'Травень',
    //                 'Червень',
    //                 'Липень',
    //                 'Серпень',
    //                 'Вересень',
    //                 'Жовтень',
    //                 'Листопад',
    //                 'Грудень',
    //             ],
    //             monthsShort: [
    //                 'Січ',
    //                 'Лют',
    //                 'Бер',
    //                 'Кві',
    //                 'Тра',
    //                 'Чер',
    //                 'Лип',
    //                 'Сер',
    //                 'Вер',
    //                 'Жов',
    //                 'Лис',
    //                 'Гру',
    //             ],
    //             today: 'Сьогодні',
    //             clear: 'Очистити',
    //             dateFormat: 'dd.MM.yyyy',
    //             timeFormat: 'hh:ii aa',
    //             firstDay: 1,
    //         },
    //         en: {},
    //     };

    //     const ids = [
    //         'modalAppDate',
    //         'mainAppDate',
    //         'doctorAppDate',
    //         'modalVisitDate',
    //     ];

    //     ids.forEach((id) => {
    //         const dateInput = document.querySelector(`#${id}`);
    //         if (!dateInput) return;

    //         const lang = dateInput.dataset.lang || 'en';
    //         const locale = datepickerLocales[lang] || {};

    //         new AirDatepicker(dateInput, {
    //             isMobile: true,
    //             autoClose: true,
    //             locale: locale,
    //         });
    //     });
    // };

    // New init
    const datePickerHandler = () => {
        const getCurrentLang = () => {
            const path = window.location.pathname;
            const segments = path
                .split('/')
                .filter((segment) => segment.length > 0);

            const firstSegment = segments[0];
            const supportedLangs = ['en', 'ru', 'uk'];

            if (supportedLangs.includes(firstSegment)) {
                return firstSegment;
            }
            return 'uk';
        };

        const currentLang = getCurrentLang();

        const datepickerLocales = {
            uk: {
                days: [
                    'Неділя',
                    'Понеділок',
                    'Вівторок',
                    'Середа',
                    'Четвер',
                    'П’ятниця',
                    'Субота',
                ],
                daysShort: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                daysMin: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                months: [
                    'Січень',
                    'Лютий',
                    'Березень',
                    'Квітень',
                    'Травень',
                    'Червень',
                    'Липень',
                    'Серпень',
                    'Вересень',
                    'Жовтень',
                    'Листопад',
                    'Грудень',
                ],
                monthsShort: [
                    'Січ',
                    'Лют',
                    'Бер',
                    'Кві',
                    'Тра',
                    'Чер',
                    'Лип',
                    'Сер',
                    'Вер',
                    'Жов',
                    'Лис',
                    'Гру',
                ],
                today: 'Сьогодні',
                clear: 'Очистити',
                dateFormat: 'dd.MM.yyyy',
                timeFormat: 'HH:mm',
                firstDay: 1,
            },
            ru: {
                days: [
                    'Воскресенье',
                    'Понедельник',
                    'Вторник',
                    'Среда',
                    'Четверг',
                    'Пятница',
                    'Суббота',
                ],
                daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
                months: [
                    'Январь',
                    'Февраль',
                    'Март',
                    'Апрель',
                    'Май',
                    'Июнь',
                    'Июль',
                    'Август',
                    'Сентябрь',
                    'Октябрь',
                    'Ноябрь',
                    'Декабрь',
                ],
                monthsShort: [
                    'Янв',
                    'Фев',
                    'Мар',
                    'Апр',
                    'Май',
                    'Июн',
                    'Июл',
                    'Авг',
                    'Сен',
                    'Окт',
                    'Ноя',
                    'Дек',
                ],
                today: 'Сегодня',
                clear: 'Очистить',
                dateFormat: 'dd.MM.yyyy',
                timeFormat: 'HH:mm',
                firstDay: 1,
            },
            en: {
                days: [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                ],
                daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                months: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ],
                monthsShort: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                ],
                today: 'Today',
                clear: 'Clear',
                dateFormat: 'dd/MM/yyyy',
                timeFormat: 'hh:mm aa',
                firstDay: 1,
            },
        };

        const ids = [
            'modalAppDate',
            'mainAppDate',
            'doctorAppDate',
            'modalVisitDate',
        ];

        ids.forEach((id) => {
            const dateInput = document.querySelector(`#${id}`);
            if (!dateInput) return;

            const locale =
                datepickerLocales[currentLang] || datepickerLocales.uk;

            new AirDatepicker(dateInput, {
                isMobile: true,
                autoClose: true,
                locale: locale,
                minDate: new Date(),
            });
        });
    };

    datePickerHandler();
    anchorPanel();
    formData();
    showMoreHandler();
    aboutMoreText();
    showMoreHandler(
        '.js-doctors-list',
        '.doctor-box',
        '.js-doctors-more',
        12,
        11
    );

    showMoreServices(
        '.js-smart-services',
        '.services-table__rect',
        '.js-smart-more',
        24,
        23,
        15,
        14,
        '.services'
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

    copyHandler();
};

export default helpers;
