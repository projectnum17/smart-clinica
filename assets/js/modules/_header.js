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
};

export default headerFlow;
