function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    const secondHand = document.querySelector('.second-hand');
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;

    const minuteHand = document.querySelector('.minute-hand');
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;


    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;

    const hourHand = document.querySelector('.hour-hand');
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;


    const hands = document.querySelectorAll('.hand');

    hands.forEach(hand => toggleTransition(hand));
}

function toggleTransition(hand) {
    hand.style.transition = '';

    if (hand.style.transform === 'rotate(90deg)') {
        hand.style.transition = 'none';
    }
}

setInterval(setDate, 1000);
