// MENU TOGGLE
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// MODAL
const modal = document.getElementById('appointmentModal');
const openModal = document.getElementById('openModal');
const closeModal = document.querySelector('.modal .close');

openModal.onclick = () => { modal.style.display = 'flex'; }
closeModal.onclick = () => { modal.style.display = 'none'; }
window.onclick = (e) => { if(e.target === modal){ modal.style.display = 'none'; } }

// WHATSAPP BOOKING FORM
const form = document.getElementById('appointmentForm');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;

    const message = `Hello SmileCare,%0A%0AMy name is ${name}.%0AI would like to book: ${service}.%0APhone: ${phone}%0AEmail: ${email}`;
    window.open(`https://wa.me/254700000000?text=${message}`, '_blank');
});