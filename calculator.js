function back() {
    const displayElement = document.getElementById('display')
    const element = displayElement.innerText
    displayElement.innerText = element.slice(0, -1)

}

function lear() {
    const displayElement = document.getElementById('display')
    const element = displayElement.innerText
    displayElement.innerText = ''

}

function display(event) {
    const show = document.getElementById('display')

    show.innerText += event
}

document.getElementById('equal').addEventListener('click', function () {

    const displayElement = document.getElementById('display')
    const element = displayElement.innerText
    const c = eval(element)
    displayElement.innerText = c
})