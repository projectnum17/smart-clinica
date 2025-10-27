const animationHandler = () => {
    const animatedItems = document.querySelectorAll('.js-animation');

    if (!animatedItems.length) return;

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('_animated');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    animatedItems.forEach((item) => observer.observe(item));
};

export default animationHandler;
