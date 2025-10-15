const reviewPage = () => {
    const reviewsBoxes = document.querySelectorAll('.js-review-element');

    if (!reviewsBoxes.length) return;

    reviewsBoxes.forEach((box) => {
        const authorText = box.querySelector('.js-author'),
            authorMore = box.querySelector('.js-author-more');

        authorMore.style.display = 'none';

        const answerText = box.querySelector('.js-answer'),
            answerMore = box.querySelector('.js-answer-more');

        if (authorText && authorText.textContent.trim().length > 100) {
            authorText.classList.add('is-highest');
            authorMore.style.display = '';

            authorMore.addEventListener('click', () => {
                authorText.classList.remove('is-highest');
                authorText.classList.add('is-open');

                authorMore.classList.add('is-hide');
            });
        }

        if (answerText && answerText.textContent.trim().length > 100) {
            answerText.classList.add('is-highest');
            answerMore.style.display = '';

            answerMore.addEventListener('click', () => {
                answerText.classList.remove('is-highest');
                answerText.classList.add('is-open');

                answerMore.classList.add('is-hide');
            });
        }
    });
};

export default reviewPage;
