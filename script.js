const time = document.getElementById("time")
const sleepButton = document.getElementById("go")

// let now = dayjs().subtract(90, 'm').format("h:mm a");

let hour;
let min;
let when = "am"
let sub = 90;


sleepButton.addEventListener("click", event =>{
    let userTime = time.value.split(":").map(Number);
    
    convertTime(userTime)
    let flexTime = dayjs(`2021-08-19: ${hour}:${min} ${when}`).format("h:mm a")
    suggestions()
    console.log(flexTime)
})

function convertTime(time){
    if (time[0] >= 13){
        time[0] = time[0] - 12;
        when = "pm"
        hour = time[0]
        min = time[1]
    }else{
        when = "am"
        hour = time[0]
        min = time[1]
    }
}

function suggestions(){
    for(let i =1; i<= 6; i++){
        flexTime = dayjs(`2021-08-19: ${hour}:${min} ${when}`).subtract(`${sub}`, 'm').format("h:mm a")
        sub = sub + 90
        console.log(`${flexTime} --- ${i} cycle`)
    }

}
