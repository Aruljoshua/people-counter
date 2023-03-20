let saveEL=document.getElementById("save-el")
let count=0
let countEL=document.getElementById("count-el")

function increment() {
    console.log("the button was clicked")
    count=count+1
    countEL.textContent=count
    console.log(count)
}
function save()
{
    let countStr=count + " - "
    saveEL.textContent +=countStr
    countEL.textContent=0
    count=0

}