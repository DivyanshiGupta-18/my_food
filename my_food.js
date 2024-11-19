const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
        }
    });
};

const observer = new IntersectionObserver(observerCallback);
document.querySelectorAll('.recipe-card, .food-item').forEach(item => observer.observe(item));



  // Get references to navbar links
  const homeLink = document.getElementById('homeLink');
  const storeLink = document.getElementById('storeLink');
  const fansLink = document.getElementById('fansLink');
  const cravingLink = document.getElementById('cravingLink');
  
  // Get references to sections
  const homeSection = document.getElementById('homeSection');
  const cravingSection = document.getElementById('cravingSection');
  const fansSection = document.getElementById('fansSection');
  const storeSection = document.getElementById('storeSection');
  
  // Add event listeners for smooth scroll
  homeLink.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default anchor behavior
    homeSection.scrollIntoView({ behavior: 'smooth' });
  });
  
  storeLink.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default anchor behavior
    storeSection.scrollIntoView({ behavior: 'smooth' });
  });
  
  fansLink.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default anchor behavior
    fansSection.scrollIntoView({ behavior: 'smooth' });
  });

  cravingLink.addEventListener('click', function(event) {
    event.preventDefault();  // Prevent default anchor behavior
    cravingSection.scrollIntoView({ behavior: 'smooth' });
  });
  