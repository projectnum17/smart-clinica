const timeLine = () => {
    const timeline = document.querySelector('.js-timeline');
    if (!timeline) return;

    const years = Array.from(document.querySelectorAll('.js-year'));
    const progress = timeline.querySelector('.js-progress');
    const slides = document.querySelectorAll('.js-history');
    const prevBtn = document.querySelector('.js-history-prev');
    const nextBtn = document.querySelector('.js-history-next');

    const getActiveIndex = () => {
        for (let i = years.length - 1; i >= 0; i--) {
            if (years[i].classList.contains('is-active')) return i;
        }
        return -1;
    };

    const setProgressToButton = (button) => {
        if (!button) return;

        const firstBtn = years.find((y) => !y.disabled);
        const lastBtn = [...years].reverse().find((y) => !y.disabled);
        if (!firstBtn || !lastBtn) return;

        const timelineRect = timeline.getBoundingClientRect();
        const btnRect = button.getBoundingClientRect();
        const lastRect = lastBtn.getBoundingClientRect();

        const currentCenter = btnRect.left + btnRect.width / 2;
        const lastCenter = lastRect.left + lastRect.width / 2;

        let progressPx = currentCenter - timelineRect.left;

        const maxPx = lastCenter - timelineRect.left;
        progressPx = Math.max(0, Math.min(maxPx, progressPx));

        progress.style.left = '0px';
        progress.style.width = `${Math.round(progressPx)}px`;
    };

    const showSlideForYear = (yearBtn) => {
        const year = yearBtn.dataset.year;
        slides.forEach((slide) =>
            slide.classList.toggle('is-active', slide.dataset.year === year)
        );
    };

    const setButtonDisabledState = (btn, isDisabled) => {
        if (!btn) return;
        btn.disabled = isDisabled;
        btn.classList.toggle('is-disabled', isDisabled);
    };

    const updateButtonsState = () => {
        const activeIndex = getActiveIndex();

        let prevIndex = activeIndex - 1;
        while (prevIndex >= 0 && years[prevIndex].disabled) prevIndex--;
        const hasPrev = prevIndex >= 0;

        let nextIndex = activeIndex + 1;
        while (nextIndex < years.length && years[nextIndex].disabled)
            nextIndex++;
        const hasNext = nextIndex < years.length;

        setButtonDisabledState(prevBtn, !hasPrev);
        setButtonDisabledState(nextBtn, !hasNext);
    };

    const activateYear = (index) => {
        const btn = years[index];
        if (!btn || btn.disabled) return;

        years.forEach((y, i) => {
            if (i <= index && !y.disabled) {
                y.classList.add('is-active');
            } else {
                y.classList.remove('is-active');
            }
        });

        setProgressToButton(btn);
        showSlideForYear(btn);
        updateButtonsState();
    };

    years.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (btn.disabled) return;
            activateYear(index);
        });
    });

    prevBtn?.addEventListener('click', () => {
        if (prevBtn.classList.contains('is-disabled')) return;

        let activeIndex = getActiveIndex();
        let target = activeIndex - 1;
        while (target >= 0 && years[target].disabled) target--;
        if (target >= 0) activateYear(target);
    });

    nextBtn?.addEventListener('click', () => {
        if (nextBtn.classList.contains('is-disabled')) return;

        let activeIndex = getActiveIndex();
        let target = activeIndex + 1;
        while (target < years.length && years[target].disabled) target++;
        if (target < years.length) activateYear(target);
    });

    window.addEventListener('resize', () => {
        const activeIndex = getActiveIndex();
        if (activeIndex >= 0) setProgressToButton(years[activeIndex]);
    });

    const initialIndexFromMarkup = (function () {
        const idx = getActiveIndex();
        if (idx >= 0) return idx;
        const firstAvailable = years.findIndex((y) => !y.disabled);
        return firstAvailable >= 0 ? firstAvailable : 0;
    })();

    if (initialIndexFromMarkup >= 0) {
        requestAnimationFrame(() => {
            activateYear(initialIndexFromMarkup);
        });
    }
};

export default timeLine;
