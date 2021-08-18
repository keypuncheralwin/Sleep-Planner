const time = document.getElementById("time")
const sleepButton = document.getElementById("go")

const currentdate = new Date(); 

const currentTime = currentdate.getHours() + ":" + currentdate.getMinutes()

let finalNumb = [];

sleepButton.addEventListener("click", event =>{
    let oldTime = time.value
    let numberTime = (oldTime.split(":"))
    for(number of numberTime){
       finalNumb.push(parseInt(number)) 
    }
    
    console.log(currentTime)
    console.log(oldTime)
    console.log(finalNumb)
    
})
