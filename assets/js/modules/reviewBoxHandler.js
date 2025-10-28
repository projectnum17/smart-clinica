const reviewBoxHandler = () => {
    const reviewItems = document.querySelectorAll('.js-review-box');
    const popup = document.querySelector('.js-review-modal');
    if (!reviewItems.length || !popup) return;

    const popupClose = popup.querySelector('.js-review-close');
    const popupName = popup.querySelector('.review-modal__head .name');
    const popupDate = popup.querySelector('.review-modal__head .date');
    const popupRating = popup.querySelector('.review-modal__head .rating');
    const popupText = popup.querySelector('.review-modal__content .text');
    const popupAnswer = popup.querySelector('.review-modal__content .answer');

    const popupSpecialist = popup.querySelector('.target-info .specialist');
    const popupService = popup.querySelector('.target-info .naiming');

    if (
        !popupClose ||
        !popupName ||
        !popupDate ||
        !popupRating ||
        !popupText ||
        !popupAnswer ||
        !popupSpecialist ||
        !popupService
    )
        return;

    reviewItems.forEach((box) => {
        const reviewTextEl = box.querySelector('.js-review-text');
        const reviewMore = box.querySelector('.js-review-popup');
        if (!reviewTextEl || !reviewMore) return;

        const fullText = reviewTextEl.textContent.trim();
        const shortText =
            fullText.length > 200 ? fullText.slice(0, 200) + '...' : fullText;

        reviewTextEl.textContent = shortText;
        reviewMore.style.display = fullText.length > 200 ? '' : 'none';

        reviewMore.addEventListener('click', () => {
            popup.classList.add('is-shown');
            document.body.classList.add('is-locked');

            popupName.textContent = box.dataset.name || '';
            popupDate.textContent = box.dataset.date || '';
            popupRating.textContent = box.dataset.rating || '';
            popupText.textContent = fullText;
            popupAnswer.textContent = box.dataset.answer || '';
            popupSpecialist.textContent = box.dataset.spec || '';
            popupService.textContent = box.dataset.service || '';
        });
    });

    const closePopup = () => {
        popup.classList.remove('is-shown');
        document.body.classList.remove('is-locked');
        setTimeout(() => {
            popupName.textContent = '';
            popupDate.textContent = '';
            popupRating.textContent = '';
            popupText.textContent = '';
            popupAnswer.textContent = '';
            popupSpecialist.textContent = '';
            popupService.textContent = '';
        }, 400);
    };

    popupClose.addEventListener('click', closePopup);
    popup.addEventListener('click', (e) => {
        if (e.target === popup) closePopup();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popup.classList.contains('is-shown')) {
            closePopup();
        }
    });
};

export default reviewBoxHandler;
