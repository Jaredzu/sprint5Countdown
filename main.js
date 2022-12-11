console.log("Hello Countdown💜")

let monthOutput = document.querySelector("#month")
let dayOutput = document.querySelector("#day")
let hourOutput = document.querySelector("#hour")
let minuteOutput = document.querySelector("#minute")
let secondsOutput = document.querySelector("#seconds")

const finalDate = new Date('Dec 31 2023 23:59:59')
console.log(`Fecha final: ${finalDate}`)

const updateCountDown = (time) => {
    let month = Math.floor(time / 1000 / 60 / 60 / 24 / 30)
    let day = Math.floor(time / 1000 / 60 / 60 / 24) % 30
    let hour = Math.floor(time / 1000 / 60 / 60) % 24
    let minute = Math.floor(time / 1000 / 60) % 60
    let seconds = Math.floor(time / 1000) % 60

    monthOutput.innerHTML = month < 10 ? `0${month}` : month;
    dayOutput.innerHTML = day < 10 ? `0${day}` : day;
    hourOutput.innerHTML = hour < 10 ? `0${hour}` : hour;
    minuteOutput.innerHTML = minute < 10 ? `0${minute}` : minute;
    secondsOutput.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

}

setInterval(() => {
    const actualDate = new Date()
    const remainTime = finalDate - actualDate;
    updateCountDown(remainTime)
}, 1000);
