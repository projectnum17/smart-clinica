const helpers = () => {
    const formData = document.querySelectorAll('form');
    if (!formData.length) return;

    formData.forEach((form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    });
};

export default helpers;
