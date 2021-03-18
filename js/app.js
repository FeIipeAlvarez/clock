
const $root = document.documentElement;
const $chkColorMode = document.getElementById('chkMode');

const lightMode = {
    "--bg-container": "var(--primary)",
    "--border-container": "var(--dark-primary)",
    "--bg-clock": "var(--secundary)",
    "--border-clock": "var(--dark-primary)",
    "--hours-hand": "var(--dark-primary)",
    "--number-color": "var(--dark-primary)",
    "--bg-center": "var(--primary)",
    "--border-center": "var(--dark-secundary)"
};
const darkMode = {
    "--bg-container": 'var(--dark-secundary)',
    "--border-container": 'var(--dark-primary)',
    "--bg-clock": 'var(--dark-primary)',
    "--border-clock": 'var(--primary)',
    "--hours-hand": 'var(--secundary)',
    "--number-color": 'var(--primary)',
    "--bg-center": 'var(--dark-secundary)',
    "--border-center": 'var(--primary)'
};


const updatePositionHandsClock = () => {
    const $secondHand = document.getElementById('secondHand');
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    //Este condicional es porque la aguja cuando llega a 0 hace un movimiento extraño, con este condicional se logra evitar.
    $secondHand.classList.add('hand-transition');
    if (seconds === 0) $secondHand.classList.remove('hand-transition');

    $root.style.setProperty('--deg-second-hand', `${seconds * 6}deg`);
    $root.style.setProperty('--deg-minute-hand', `${minutes * 6}deg`);
    $root.style.setProperty('--deg-hour-hand', `${((hours - 12) * 30) + (minutes / 2)}deg`);

};

setInterval(updatePositionHandsClock, 1000);

const changeVariablesColorMode = objMode => {
    for (const clockPart of Object.keys(lightMode)) {
        $root.style.setProperty(clockPart, objMode[clockPart]);
    }
};

$chkColorMode.addEventListener('click', e => e.target.checked ? changeVariablesColorMode(darkMode) : changeVariablesColorMode(lightMode));

document.addEventListener('DOMContentLoaded', updatePositionHandsClock); //Para evitar que al cargar la página las agujas no se queden quietas por 1s, el tiempo del intervalo.