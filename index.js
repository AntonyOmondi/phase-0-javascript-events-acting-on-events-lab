// Your code here

const dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#FF69B4"

// dodger.style.left = "0px"

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)

    if(left > 0){
        dodger.style.left = `${left - 1}px`
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft"){
        moveDodgerLeft()
    }
})

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)

    if (left > 0 && left <= 360) {
        dodger.style.left = `${left + 1}px`
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})
