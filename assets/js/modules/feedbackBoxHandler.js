const feedbackBoxHandler = () => {
    const feedbackItems = document.querySelectorAll('.js-feedback-box');
    const modal = document.querySelector('.js-feedback-modal');
    if (!feedbackItems.length || !modal) return;

    const modalBody = modal.querySelector('.js-feedback-body');
    const modalClose = modal.querySelector('.js-feedback-close');
    if (!modalBody || !modalClose) return;

    feedbackItems.forEach((box) => {
        const textEl = box.querySelector('.js-feedback-text');
        const moreBtn = box.querySelector('.js-feedback-more');
        if (!textEl || !moreBtn) return;

        const fullText = textEl.textContent.trim();

        if (fullText.length > 200) {
            const shortText = fullText.slice(0, 200) + '...';
            textEl.textContent = shortText;
            textEl.classList.add('is-highest')
            moreBtn.style.display = '';
        } else {
            moreBtn.style.display = 'none';
        }

        moreBtn.addEventListener('click', () => {
            modal.classList.add('is-shown');
            document.body.classList.add('is-locked');

            const head = box.querySelector('.feedback-box__head').outerHTML;
            const labels =
                box.querySelector('.feedback-box__labels')?.outerHTML || '';
            const text = `<p class="feedback-box__text">${fullText}</p>`;
            modalBody.innerHTML = head + labels + text;
        });
    });

    const closeModal = () => {
        modal.classList.remove('is-shown');
        document.body.classList.remove('is-locked');
    };

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    modal.addEventListener('transitionend', () => {
        if (!modal.classList.contains('is-shown')) {
            modalBody.innerHTML = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-shown')) {
            closeModal();
        }
    });
};

export default feedbackBoxHandler;
