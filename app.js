let body = document.querySelector('body')
let colorrgb = document.querySelector('#colorrgb')
let genbtn = document.querySelector('#gen-btn')

genbtn.addEventListener('click', () => {

    const r = Math.floor((Math.random() * 255))
    const g = Math.floor((Math.random() * 255))
    const b = Math.floor((Math.random() * 255))

    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    colorrgb.innerHTML = `rgb (${r}, ${g}, ${b})`

    const total = r + g + b

    if (total <= 500) {
        colorrgb.style.color = 'white'
    }
    else colorrgb.style.color = 'black'


})
