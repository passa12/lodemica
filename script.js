const serviceForm = document.getElementById('service-form');
const durationDisplay = document.getElementById('duration-display');

serviceForm.addEventListener('change', () => {
    let duration = 0;
    const checkboxes = document.querySelectorAll('input[name="service"]:checked');
    checkboxes.forEach(checkbox => {
        duration += parseInt(checkbox.value);
    });
    durationDisplay.textContent = `Duración total: ${duration} minutos`;
});
