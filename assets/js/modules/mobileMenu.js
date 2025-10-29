const mobileMenu = () => {
    const subMenuHandler = () => {
        const openMenu = document.querySelector('.js-toggle-menu');
        const menuBox = document.querySelector('.js-mob-menu');

        if (!menuBox) return;

        openMenu.addEventListener('click', () => {
            const isOpened = menuBox.classList.toggle('is-open');
            openMenu.classList.toggle('is-open');
            document.body.style.overflow = 'hidden'
            document.querySelector('.header').classList.add('on-top')

            if (!isOpened) {
                const allSubmenus = menuBox.querySelectorAll(
                    '.dd-menu-wrap.is-open'
                );
                document.body.style.overflow = ''
                document.querySelector('.header').classList.remove('on-top')
                allSubmenus.forEach((sm) => sm.classList.remove('is-open'));
            }
        });

        menuBox.addEventListener('click', (e) => {
            const submenuBtn = e.target.closest('.js-mobile-submenu');
            const backBtn = e.target.closest('.dd-menu-back');

            if (submenuBtn) {
                const submenuWrap = submenuBtn.nextElementSibling;
                if (submenuWrap) {
                    submenuWrap.classList.add('is-open');
                }
            }

            if (backBtn) {
                const ddWrap = backBtn.closest('.dd-menu-wrap');
                if (ddWrap) {
                    ddWrap.classList.remove('is-open');
                }
            }
        });
    };

    const adaptiveDropdown = ({
        triggerSelector,
        dropdownSelector,
        activeClass = 'is-show',
        breakpoint = 767,
    }) => {
        const trigger = document.querySelector(triggerSelector);
        const dropdown = document.querySelector(dropdownSelector);

        if (!trigger || !dropdown) return;

        let currentMode = null;
        let removeListeners = () => {};

        const setupHoverMode = () => {
            removeListeners();

            const onEnter = () => dropdown.classList.add(activeClass);
            const onLeave = () => dropdown.classList.remove(activeClass);

            trigger.addEventListener('mouseenter', onEnter);
            trigger.addEventListener('mouseleave', onLeave);

            removeListeners = () => {
                trigger.removeEventListener('mouseenter', onEnter);
                trigger.removeEventListener('mouseleave', onLeave);
            };

            currentMode = 'hover';
        };

        const setupClickMode = () => {
            removeListeners();

            const onClick = (e) => {
                e.stopPropagation();
                dropdown.classList.toggle(activeClass);
            };

            const onDocClick = (e) => {
                if (!trigger.contains(e.target))
                    dropdown.classList.remove(activeClass);
            };

            trigger.addEventListener('click', onClick);
            document.addEventListener('click', onDocClick);

            removeListeners = () => {
                trigger.removeEventListener('click', onClick);
                document.removeEventListener('click', onDocClick);
            };

            currentMode = 'click';
        };

        const checkMode = () => {
            const width = window.innerWidth;
            if (width <= breakpoint && currentMode !== 'click') {
                setupClickMode();
            } else if (width > breakpoint && currentMode !== 'hover') {
                setupHoverMode();
            }
        };

        checkMode();
        window.addEventListener('resize', checkMode);
    };

    adaptiveDropdown({
        triggerSelector: '.js-header-phone',
        dropdownSelector: '.js-header-phone-wrapper',
        activeClass: 'is-show',
        breakpoint: 767,
    });

    adaptiveDropdown({
        triggerSelector: '.js-header-lang',
        dropdownSelector: '.js-header-lang-wrapper',
        activeClass: 'is-show',
        breakpoint: 767,
    });

    subMenuHandler();
};

export default mobileMenu;
