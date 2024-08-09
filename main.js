function ani (ele) {
    window.addEventListener('load', () => {
        const card = document.querySelector(ele);
        card.addEventListener('animationend', () => {
            card.classList.add('animated');
        });
    })
};
ani('.cards .left');
ani('.cards .center');
ani('.cards .right');