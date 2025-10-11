const selectsInit = () => {
    const lightweightDropdown = (selectEl) => {
        if (!selectEl) return;

        const options = Array.from(selectEl.options);
        if (options.length === 0) return;

        selectEl.classList.add('select-hidden');

        const wrap = document.createElement('div');
        wrap.className = 'select-wrap';
        selectEl.parentNode.insertBefore(wrap, selectEl);
        wrap.appendChild(selectEl);

        const styledSelect = document.createElement('div');
        styledSelect.className = 'select-styled placeholder';
        styledSelect.textContent = options[0].textContent;
        wrap.appendChild(styledSelect);

        const list = document.createElement('ul');
        list.className = 'select-options hidden';
        wrap.appendChild(list);

        options.forEach((opt) => {
            const li = document.createElement('li');
            li.textContent = opt.textContent;
            li.dataset.value = opt.value;
            if (opt.selected) li.classList.add('is-selected');
            list.appendChild(li);
        });

        styledSelect.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelectorAll('.select-styled.active').forEach((el) => {
                if (el !== styledSelect) {
                    el.classList.remove('active');
                    el.nextElementSibling.classList.add('hidden');
                }
            });
            styledSelect.classList.toggle('active');
            list.classList.toggle('hidden');
        });

        list.addEventListener('click', (e) => {
            const target = e.target;
            if (target.tagName !== 'LI') return;

            const selectedValue = target.dataset.value;

            styledSelect.textContent = target.textContent;
            styledSelect.classList.remove('active');
            list.classList.add('hidden');

            selectEl.value = selectedValue;

            const index = options.findIndex(
                (opt) => opt.value === selectedValue
            );
            if (index >= 0) selectEl.selectedIndex = index;

            selectEl.dispatchEvent(new Event('change', { bubbles: true }));

            list.querySelectorAll('.is-selected').forEach((li) =>
                li.classList.remove('is-selected')
            );
            target.classList.add('is-selected');

            if (selectedValue === '') {
                styledSelect.classList.add('placeholder');
            } else {
                styledSelect.classList.remove('placeholder');
            }
        });

        document.addEventListener('click', () => {
            styledSelect.classList.remove('active');
            list.classList.add('hidden');
        });

        selectEl.addEventListener('change', () => {
            const selectedOption = selectEl.selectedOptions[0];
            const value = selectedOption.value;

            styledSelect.textContent = selectedOption.textContent;
            list.querySelectorAll('.is-selected').forEach((li) =>
                li.classList.remove('is-selected')
            );
            const activeLi = list.querySelector(`li[data-value="${value}"]`);
            if (activeLi) activeLi.classList.add('is-selected');

            if (value === '') {
                styledSelect.classList.add('placeholder');
            } else {
                styledSelect.classList.remove('placeholder');
            }
        });
    };

    const selects = document.querySelectorAll('.js-select');
    if (!selects.length) return;

    selects.forEach(lightweightDropdown);
};

export default selectsInit;
