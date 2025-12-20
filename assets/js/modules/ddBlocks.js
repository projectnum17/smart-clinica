const ddBlocks = () => {
    const initDdItems = (selector, options = {}) => {
        const ddItems = document.querySelectorAll(selector);
        if (!ddItems.length) return;

        const { ignoreSelector } = options;

        ddItems.forEach((item) => {
            if (ignoreSelector) {
                const ignoreEls = item.querySelectorAll(ignoreSelector);
                ignoreEls.forEach((el) => {
                    el.addEventListener('click', (e) => e.stopPropagation());
                });
            }

            if (item.classList.contains('js-is-open')) {
                item.classList.add('is-open');
                item.classList.remove('is-hover');
            } else {
                item.classList.remove('is-open');
                item.classList.add('is-hover');
            }

            item.addEventListener('click', () => {
                item.classList.toggle('is-open');
                item.classList.toggle('is-hover');
            });
        });
    };

    initDdItems('.js-dd-item');

    initDdItems('.js-prices-dd', {
        ignoreSelector: ['.js-appointment', '.js-visit-trigger'],
    });
};

export default ddBlocks;
