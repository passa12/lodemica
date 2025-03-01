const serviceForm = document.getElementById('service-form');
const durationDisplay = document.getElementById('duration-display');

serviceForm.addEventListener('change', () => {
    let duration = 20; // Duración predeterminada
    const checkboxes = document.querySelectorAll('input[name="service"]:checked');
    checkboxes.forEach(checkbox => {
        if (parseInt(checkbox.value) === 40) {
            duration = 40; // Si se selecciona un servicio de 40 minutos, la duración es 40
        }
    });
    durationDisplay.textContent = `Duración total: ${duration} minutos`;
});
