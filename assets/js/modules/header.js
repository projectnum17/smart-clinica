const headerFlow = () => {
    const ddMenu = document.querySelector('.js-dd-menu');
    if (!ddMenu) return;

    ddMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        ddMenu.classList.toggle('is-open');
    });

    document.addEventListener('click', (e) => {
        if (!ddMenu.contains(e.target)) {
            ddMenu.classList.remove('is-open');
        }
    });

    const headerSearchHandler = document.querySelector('.js-search-btn');
    const headerSearchBox = document.querySelector('.js-header-search');
    const headerSearchField = document.querySelector('.js-header-search input');
    const headerSearchClose = document.querySelector('.js-search-close');

    if (!headerSearchBox || !headerSearchHandler || !headerSearchClose) return;

    headerSearchHandler.addEventListener('click', () => {
        headerSearchBox.classList.add('is-shown');
        setTimeout(() => headerSearchField.focus(), 300);
    });

    headerSearchClose.addEventListener('click', () => {
        headerSearchBox.classList.remove('is-shown');
        setTimeout(() => (headerSearchField.value = ''), 400);
    });

    const subMenuController = () => {
        const menuDetailsHandler = (trigger, selector, otherMenus = []) => {
            const el = document.querySelector(trigger);
            const menu = document.querySelector(selector);
            if (!el || !menu) return;

            el.addEventListener('click', () => {
                otherMenus.forEach(
                    ({ trigger: otherTrigger, menu: otherMenu }) => {
                        const otherEl = document.querySelector(otherTrigger);
                        const otherMenuEl = document.querySelector(otherMenu);
                        if (otherEl && otherMenuEl) {
                            otherEl.classList.remove('is-open');
                            otherMenuEl.classList.remove('is-show');
                        }
                    }
                );

                el.classList.toggle('is-open');
                menu.classList.toggle('is-show');
            });
        };

        const menuTabsHandler = (triggers, selector, parent) => {
            const tabs = document.querySelectorAll(triggers),
                tabsContent = document.querySelectorAll(selector),
                tabsParent = document.querySelector(parent);

            if (!tabs.length || !tabsContent.length || !tabsParent) return;

            const hideContent = () => {
                tabsContent.forEach((item) => {
                    item.classList.add('is-hide');
                    item.classList.remove('is-show', 'is-fade');
                });

                tabs.forEach((item) => {
                    item.classList.remove('is-active');
                });
            };

            const showContent = (i = 0) => {
                tabsContent[i].classList.add('is-show', 'is-fade');
                tabsContent[i].classList.remove('is-hide');
                tabs[i].classList.add('is-active');
            };

            hideContent();
            showContent();

            tabsParent.addEventListener('click', (event) => {
                const target = event.target.closest(triggers);

                if (target) {
                    tabs.forEach((item, i) => {
                        if (target === item) {
                            hideContent();
                            showContent(i);
                        }
                    });
                }
            });
        };

        menuDetailsHandler('.js-adult-trigger', '.js-adult-map', [
            { trigger: '.js-child-trigger', menu: '.js-child-map' },
        ]);

        menuDetailsHandler('.js-child-trigger', '.js-child-map', [
            { trigger: '.js-adult-trigger', menu: '.js-adult-map' },
        ]);

        menuTabsHandler(
            '.js-adult-controller',
            '.js-adult-menu',
            '.js-adult-nav'
        );
        menuTabsHandler(
            '.js-child-controller',
            '.js-child-menu',
            '.js-child-nav'
        );
    };

    subMenuController();
};

export default headerFlow;
