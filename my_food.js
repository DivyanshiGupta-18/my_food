const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
        }
    });
};

const observer = new IntersectionObserver(observerCallback);
document.querySelectorAll('.recipe-card, .food-item').forEach(item => observer.observe(item));