window.onload = function () {
    const clockHours = document.querySelector(".clock__body--hours");
    const clockMinutes = document.querySelector(".clock__body--minutes");
    const clockSeconds = document.querySelector(".clock__body--seconds");
    const error = document.querySelector('.error');
    const alarmScreen = document.querySelectorAll('.alarm__screen');
    const audio = new Audio();
    let isValid = false;

    const alarmForm = document.querySelector('.alarm__form');


    window.setInterval(function () {
        const now = new Date();

        (now.getHours() < 10) ? clockHours.innerHTML = '0' + now.getHours(): clockHours.innerHTML = now.getHours();
        (now.getMinutes() < 10) ? clockMinutes.innerHTML = '0' + now.getMinutes(): clockMinutes.innerHTML = now.getMinutes();
        (now.getSeconds() < 10) ? clockSeconds.innerHTML = '0' + now.getSeconds(): clockSeconds.innerHTML = now.getSeconds();

        if (alarmForm.getAttribute('alarm') === 'false' && isValid === true) {
            checkAlarm();
        }

    }, 1000);

    alarmForm.set.addEventListener('click', (e) => {
        e.preventDefault();

        validateAlarm();
        if (isValid === true) {
            console.log('All set!');
        }
    });

    alarmForm.clear.addEventListener('click', (e) => {
        e.preventDefault();

        console.log('All clear!');
        clearAlarm();
    });

    alarmForm.submit.addEventListener('click', (e) => {
        e.preventDefault();

        console.log('Submited!');
        submitAlarm();
    });

    const validateAlarm = () => {
        const hoursValue = alarmForm.hours.value;
        const minutesValue = alarmForm.minutes.value;
        const secondsValue = alarmForm.seconds.value;

        if (hoursValue < 0 || hoursValue > 23 || hoursValue === '' || isNaN(Number(hoursValue))) {
            error.hidden = false;
            isValid = false;
        } else if (minutesValue < 0 || minutesValue > 59 || minutesValue === '' || isNaN(Number(minutesValue))) {
            error.hidden = false;
            isValid = false;
        } else if (secondsValue < 0 || secondsValue > 59 || secondsValue === '' || isNaN(Number(secondsValue))) {
            error.hidden = false;
            isValid = false;
        } else {
            error.hidden = true;
            isValid = true;
        }

        return isValid;
    }

    const clearAlarm = () => {
        alarmForm.hours.value = '';
        alarmForm.minutes.value = '';
        alarmForm.seconds.value = '';

        alarmScreen.forEach(e => {
            e.classList.remove('alarm__active');
        });

        alarmForm.setAttribute('alarm', 'false');
        error.hidden = true;
        alarmForm.submit.hidden = true;
        stopAudio();
        isValid = false;       
    }

    const submitAlarm = () => {
        alarmScreen.forEach(e => {
            e.classList.remove('alarm__active');
        });

        alarmForm.setAttribute('alarm', 'false');
        alarmForm.submit.hidden = true;
        stopAudio();
        isValid === true;
    }

    const checkAlarm = () => {

        if (alarmForm.hours.value === clockHours.textContent && alarmForm.minutes.value === clockMinutes.textContent && alarmForm.seconds.value === clockSeconds.textContent) {
            alarmForm.setAttribute('alarm', 'true');
            alarmScreen.forEach(e => {
                e.classList.add('alarm__active');
            })

            alarmForm.submit.hidden = false;
            playAudio();
        } else {
            alarmForm.setAttribute('alarm', 'false');
            alarmScreen.forEach(e => {
                e.classList.remove('alarm__active');
            })
        }
    }

    const playAudio = () => {
        audio.preload = 'auto';
        audio.loop = true;
        audio.volume = 0.5;
        audio.src = 'assets/audio/SlowMorning.mp3';
        audio.play();
    }

    const stopAudio = () => {
        audio.pause();
        audio.currentTime = 0;
    }
};