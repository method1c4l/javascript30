const inputs = document.querySelectorAll('.controls .input');

inputs.forEach(input => input.addEventListener('change', handleUpdate));

inputs.forEach(input => input.addEventListener('mousedown', () => addMouseMove(input)));

inputs.forEach(input => input.addEventListener('mouseup', () => removeMouseMove(input)));


function addMouseMove(input) {
    input.addEventListener('mousemove', handleUpdate);
}

function removeMouseMove(input) {
    input.removeEventListener('mousemove', handleUpdate);
}

function handleUpdate() {
    const suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.id}`, this.value + suffix);
}
