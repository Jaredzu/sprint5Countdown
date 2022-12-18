let monthOutput = document.querySelector("#month")
let dayOutput = document.querySelector("#day")
let hourOutput = document.querySelector("#hour")
let minuteOutput = document.querySelector("#minute")
let secondsOutput = document.querySelector("#seconds")

export const updateCountDown = (time) => {
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
