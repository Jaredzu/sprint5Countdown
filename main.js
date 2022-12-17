console.log("Hello Countdown💜")

import { updateCountDown } from "./countDown.js";

const finalDate = new Date('Dec 31 2023 23:59:59')
console.log(`Fecha final: ${finalDate}`)

setInterval(() => {
    const actualDate = new Date()
    const remainTime = finalDate - actualDate;
    updateCountDown(remainTime)
}, 1000);
