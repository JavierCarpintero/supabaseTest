let imageList = ["back_01.png", "back_02.png", "back_03.png"]

function bgChange(){
    let randomNumber = Math.round(Math.random() * ((imageList.length-1) - 0) + 0)
    console.log(randomNumber)
    document.getElementById("bg").style.backgroundImage = "url('./style/assets/" + imageList[randomNumber] + "')"
}

setInterval(bgChange, 10000)