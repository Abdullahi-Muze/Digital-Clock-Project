let dateDMY= document.querySelector(".date")
let timeHMS= document.querySelector(".time")
let amPmCon= document.querySelector(".am-pm")

let date= new Date()
let month= date.toLocaleDateString("en-us", {month: "long"})
let day= date.getDate().toString().padStart(2 ,"0")
let year= date.getFullYear()
let nameDay= date.toLocaleDateString("en-us", {weekday: 'long'})


let hour= date.getHours().toString().padStart(2 ,"0")
let minute= date.getMinutes().toString().padStart(2 ,"0")
let second= date.getSeconds().toString().padStart(2 ,"0")


dateDMY.innerHTML= `${nameDay}, ${month} ${day}, ${year}`
timeHMS.innerHTML= `${hour}:${minute}:${second}`


setInterval(
    function clock(){
        let date= new Date()
let month= date.toLocaleDateString("en-us", {month: "long"})
let day= date.getDate().toString().padStart(2 ,"0")
let year= date.getFullYear()
let nameDay= date.toLocaleDateString("en-us", {weekday: 'long'})


let hour= date.getHours().toString().padStart(2 ,"0")
let minute= date.getMinutes().toString().padStart(2 ,"0")
let second= date.getSeconds().toString().padStart(2 ,"0")


dateDMY.innerHTML= `${nameDay}, ${month} ${day}, ${year}`
timeHMS.innerHTML= `${hour}:${minute}:${second}`
    },1000
)
