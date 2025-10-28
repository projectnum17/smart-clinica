const infoModals = () => {
    const simpleModalsHandler = (modal, trigger, close) => {
        const modalBox = document.querySelector(modal);
        const modalTrigger = document.querySelectorAll(trigger);
        const modalClose = document.querySelector(close);

        if (!modalBox || !modalTrigger.length || !modalClose) return;

        const closeModal = () => {
            document.body.classList.remove('is-locked');
            modalBox.classList.remove('is-show');
        };

        const openModal = () => {
            document.body.classList.add('is-locked');
            modalBox.classList.add('is-show');
        };

        modalClose.addEventListener('click', closeModal);
        modalTrigger.forEach((btn) => btn.addEventListener('click', openModal));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalBox.classList.contains('is-show')) {
                closeModal();
            }
        });

        modalBox.addEventListener('click', (e) => {
            if (e.target === modalBox) {
                closeModal();
            }
        });
    };

    const modalFormHandler = (options) => {
        const {
            triggerSelector,
            wrapperSelector,
            formSelector,
            successSelector,
            innerSelector,
        } = options;

        const modalTrigger = document.querySelectorAll(triggerSelector);
        const modalWrapper = document.querySelector(wrapperSelector);

        if (!modalWrapper || !modalTrigger.length) return;

        const successWindow = modalWrapper.querySelector(successSelector);
        const formWindow = modalWrapper.querySelector(formSelector);
        const formData = modalWrapper.querySelector('form');

        if (!successWindow || !formWindow || !formData) return;

        const closeSuccess = successWindow.querySelector('.js-success-close');
        const closeForm = formWindow.querySelector('.js-form-close');

        if (!closeSuccess || !closeForm) return;

        successWindow.classList.add('is-hide');

        const closeModal = () => {
            document.body.classList.remove('is-locked');
            modalWrapper.classList.remove('is-show');
            const form = modalWrapper.querySelector('form');
            form.reset();
        };

        const openModal = () => {
            document.body.classList.add('is-locked');
            modalWrapper.classList.add('is-show');

            successWindow.classList.add('is-hide');
            formWindow.classList.remove('is-hide');
        };

        modalTrigger.forEach((btn) => btn.addEventListener('click', openModal));

        closeForm.addEventListener('click', closeModal);
        closeSuccess.addEventListener('click', closeModal);

        document.addEventListener('keydown', (e) => {
            if (
                e.key === 'Escape' &&
                modalWrapper.classList.contains('is-show')
            ) {
                closeModal();
            }
        });

        modalWrapper.addEventListener('click', (e) => {
            const inner = modalWrapper.querySelector(innerSelector);
            if (e.target === modalWrapper || e.target === inner) {
                closeModal();
            }
        });

        formData.addEventListener('submit', (e) => {
            e.preventDefault();
            successWindow.classList.remove('is-hide');
            formWindow.classList.add('is-hide');
        });
    };

    simpleModalsHandler('.js-map-bus', '.js-bus-trigger', '.js-map-bus__close');
    simpleModalsHandler('.js-map-car', '.js-car-trigger', '.js-map-car__close');
    simpleModalsHandler(
        '.js-prices-modal',
        '.js-prices-trigger',
        '.js-prices-close'
    );

    modalFormHandler({
        triggerSelector: '.js-appointment',
        wrapperSelector: '.js-app-wrapper',
        formSelector: '.js-app-form',
        successSelector: '.js-app-success',
        innerSelector: '.app-modal__inner',
    });

    modalFormHandler({
        triggerSelector: '.js-impressions',
        wrapperSelector: '.js-feedbacks-wrapper',
        formSelector: '.js-feedbacks-form',
        successSelector: '.js-feedbacks-success',
        innerSelector: '.feedbacks-modal__inner',
    });

    modalFormHandler({
        triggerSelector: '.js-report',
        wrapperSelector: '.js-report-wrapper',
        formSelector: '.js-report-form',
        successSelector: '.js-report-success',
        innerSelector: '.report-modal__inner',
    });
};

export default infoModals;
