const clockHours = document.querySelector(".clock__body--hours");
const clockMinutes = document.querySelector(".clock__body--minutes");
const clockSeconds = document.querySelector(".clock__body--seconds");
const error = document.querySelector('.error');

const alarmForm = document.querySelector('.alarm__form');

const updateTime = () => {
    const now = new Date();

    (now.getHours() < 10) ? clockHours.innerHTML = '0' + now.getHours(): clockHours.innerHTML = now.getHours();
    (now.getMinutes() < 10) ? clockMinutes.innerHTML = '0' + now.getMinutes(): clockMinutes.innerHTML = now.getMinutes();
    (now.getSeconds() < 10) ? clockSeconds.innerHTML = '0' + now.getSeconds(): clockSeconds.innerHTML = now.getSeconds();
};

const updateClock = () => {
    const findTimeoutToNextSecond = () => {
        const timeout = new Date();
            return timeout;
    }
    // find current time
    // update clock
    setTimeout(() => {
        setInterval(() => updateTime(), 1000)
        // once a second update clock
    }, findTimeoutToNextSecond() /* find timeout to next second */ )
}



const setAlarm = (() => {
    const timeId = null;

    return () => {
        if (timeId) // clean previous

            timeId = setTimeout(() => {

            }, findTimeoutAsDifferenceBetweenCurrentAndAlarmTime())
    };
})()

updateClock()