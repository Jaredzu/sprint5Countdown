console.log("Hello Countdown💜")

let monthOutput = document.querySelector("#month")
let dayOutput = document.querySelector("#day")
let hourOutput = document.querySelector("#hour")
let minuteOutput = document.querySelector("#minute")
let secondsOutput = document.querySelector("#seconds")

const actualDate = new Date()
console.log(`El día de hoy: ${actualDate}`)

const finalDate = new Date('Jan 01 2023')
console.log(`Fecha final: ${finalDate}`)

const updateCountDown = () => {
    const remainTime = finalDate - actualDate;

    let day = Math.floor(remainTime / 1000 / 60 / 60 / 24)
    let hour = Math.floor(remainTime / 1000 / 60 / 60) % 24
    let minute = Math.floor(remainTime / 1000 / 60) % 60
    let seconds = Math.floor(remainTime / 1000) % 60

    dayOutput.innerHTML = day
    hourOutput.innerHTML = hour
    minuteOutput.innerHTML = minute
    secondsOutput.innerHTML = seconds

}
updateCountDown()

/* setInterval(updateCountDown, 1000);
 */
