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
};

export default headerFlow;
