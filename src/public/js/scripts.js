const button = document.getElementById('logoutBtn')

button.addEventListener('click', e => {
    e.preventDefault();
    alert('¡Gracias por visitar nuestro e-shop! Te esperamos nuevamente.');
    window.location.replace('/logout');
})