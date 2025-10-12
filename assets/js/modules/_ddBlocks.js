const ddBlocks = () => {
    const initDdItems = (selector, options = {}) => {
        const ddItems = document.querySelectorAll(selector);
        if (!ddItems.length) return;

        const { ignoreSelector } = options;

        ddItems[0].classList.add('is-open');

        ddItems.forEach((item) => {
            if (ignoreSelector) {
                const ignoreEls = item.querySelectorAll(ignoreSelector);
                ignoreEls.forEach((el) => {
                    el.addEventListener('click', (e) => e.stopPropagation());
                });
            }

            if (!item.classList.contains('is-open')) {
                item.classList.add('is-hover');
            } else {
                item.classList.remove('is-hover');
            }

            item.addEventListener('click', () => {
                const isOpen = item.classList.contains('is-open');

                ddItems.forEach((el) => {
                    el.classList.remove('is-open');
                    el.classList.add('is-hover');
                });

                if (!isOpen) {
                    item.classList.add('is-open');
                    item.classList.remove('is-hover');
                }
            });
        });
    };

    initDdItems('.js-dd-item');

    initDdItems('.js-prices-dd', {
        ignoreSelector: '.js-appointment',
    });
};

export default ddBlocks;
