const fancyBoxHandler = () => {
    const bindBox = (selector) => {
        Fancybox.bind(selector, {
            Thumbs: {
                autoStart: true,
            },
            Toolbar: {
                display: [{ id: 'counter', position: 'center' }, 'close'],
            },
        });
    };

    bindBox('[data-fancybox="docs"]');
    bindBox('[data-fancybox="cert"]');
};

export default fancyBoxHandler;
