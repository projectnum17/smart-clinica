const feedbackRatingHandler = () => {
    const starsFlow = (reason, btns, value) => {
        const ratingReason = document.querySelector(reason);
        if (!ratingReason) return;

        const ratingBlocks = ratingReason.querySelectorAll(btns);
        const input = ratingReason.querySelector(value);

        let selected = parseInt(input.value, 10) || 0;

        ratingBlocks.forEach((s, i) => {
            s.classList.toggle('is-colored', i < selected);
        });

        ratingBlocks.forEach((star, idx) => {
            star.addEventListener('mouseenter', () => {
                ratingBlocks.forEach((s, i) => {
                    s.classList.toggle('is-hover', i <= idx);
                });
            });

            star.addEventListener('mouseleave', () => {
                ratingBlocks.forEach((s) => s.classList.remove('is-hover'));
            });

            star.addEventListener('click', () => {
                selected = idx + 1;
                input.value = selected;

                ratingBlocks.forEach((s, i) => {
                    s.classList.toggle('is-colored', i < selected);
                });
            });
        });
    };

    starsFlow(
        '.js-rating-specialist',
        '.js-rating-btn',
        'input[name="rating-specialist"]'
    );

    starsFlow(
        '.js-rating-clinic',
        '.js-rating-btn',
        'input[name="rating-clinic"]'
    );
};

export default feedbackRatingHandler;
