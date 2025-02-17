function saveInfo(){
    let value = this.getAttribute('data-value')
    localStorage.setItem('info', value)
    // console.log(localStorage.getItem('info'))
}

function getButtons(){
    const buttons = document.querySelectorAll('a')
    buttons.forEach((item) => {
        item.addEventListener('click', saveInfo)
    })
}

let buttonList = setTimeout(getButtons, 200)

