const insert = document.getElementById("insert")
const blurb = document.getElementById("blurb")
const again = document.querySelector(".again")
const container = document.querySelector(".container")
const time = document.getElementById("time")
const sleepButton = document.querySelector(".buttonStyle")
const boxes = document.querySelectorAll(".timeDisplay")
const hours = document.querySelectorAll(".more")
const cycles = document.querySelectorAll(".cycles")
const prompt = document.querySelector("#timePrompt")

again.classList.add("hide")


let suggestionsArray = []

let hoursArray = [
    "9 hours of sleep",
    "7.5 hours of sleep",
    "6 hours of sleep",
    "4.5 hours of sleep",
    "3 hours of sleep",
    "1.5 hours of sleep"
]

let cyclesArray = [
    "6 Sleep cycles",
    "5 sleep cycles",
    "4 sleep cycles",
    "3 sleep cycles",
    "2 sleep cycles",
    "1 sleep cycle"
]

//initialising time variables for day.js library
let hour;
let min;
let when = "am"
let sub = 90;


sleepButton.addEventListener("click", event => {
    suggestionsArray.length = 0; //resetting array of time suggestions back to 0
    if(time.value !== ""){ //only show time suggestions if a valid time is chosen
        container.classList.remove("hide")
        container.classList.add("show")
        prompt.remove()
        time.remove()
        sleepButton.remove()
        again.classList.add("show")
        again.classList.remove("hide")
        again.classList.add("show")
    }
    let userTime = time.value.split(":").map(Number); //picking apart the user time input and storing it into an array
    convertTime(userTime)
    let flexTime = dayjs(`2021-12-12: ${hour}:${min} ${when}`).format("h:mm a")
    suggestions()
    
})

again.addEventListener('click', event =>{
    container.classList.remove("show")
    container.classList.add("hide")
    blurb.after(prompt)
    prompt.after(time)
    insert.after(sleepButton)
    again.classList.remove("show")
    again.classList.add("hide")
    
})



function convertTime(time) {
    if (time[0] >= 13) {
        time[0] = time[0] - 12;
        when = "pm"
        hour = time[0]
        min = time[1]
    } else {
        when = "am"
        hour = time[0]
        min = time[1]
    }
}

function suggestions() {
    for (let i = 1; i <= 6; i++) {
            flexTime = dayjs(`2021-08-19: ${hour}:${min} ${when}`).subtract(`${sub}`, 'm').format("h:mm a")
            sub = sub + 90
            suggestionsArray.unshift(flexTime)
            console.log(`${flexTime} --- ${i} cycle`)
    }

    sub = 90;
    console.log(suggestionsArray)
    display(suggestionsArray)
}

function display(arr){
    for(let i = 0; i < 5; i++){
        boxes[i].textContent = arr[i]
        hours[i].textContent = hoursArray[i]
        cycles[i].textContent = cyclesArray[i]
    }
}

function hideElement(element){
    element.classList.add("hide")
    console.log('Hide')
}