
const $root = document.documentElement;
const $chkColorMode = document.getElementById('chkMode');


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

const changeVariablesToLightMode = () => {

    $root.style.setProperty(`--bg-container`, 'var(--primary)');
    $root.style.setProperty(`--border-container`, 'var(--dark-primary)');
    $root.style.setProperty(`--bg-clock`, 'var(--secundary)');
    $root.style.setProperty(`--border-clock`, 'var(--dark-primary)');
    $root.style.setProperty(`--hours-hand`, 'var(--dark-primary)');
    $root.style.setProperty(`--number-color`, 'var(--dark-primary)');
    $root.style.setProperty(`--bg-center`, 'var(--primary)');
    $root.style.setProperty(`--border-center`, 'var(--dark-secundary)');
};

const changeVariablesToDarkMode = () => {

    $root.style.setProperty(`--bg-container`, 'var(--dark-secundary)');
    $root.style.setProperty(`--border-container`, 'var(--dark-primary)');
    $root.style.setProperty(`--bg-clock`, 'var(--dark-primary)');
    $root.style.setProperty(`--border-clock`, 'var(--primary)');
    $root.style.setProperty(`--hours-hand`, 'var(--secundary)');
    $root.style.setProperty(`--number-color`, 'var(--primary)');
    $root.style.setProperty(`--bg-center`, 'var(--dark-secundary)');
    $root.style.setProperty(`--border-center`, 'var(--primary)');
};

$chkColorMode.addEventListener('click', e => e.target.checked ? changeVariablesToDarkMode() : changeVariablesToLightMode());