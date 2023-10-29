const $ = document
let random = []
const addPersonToList = () => {
    let warning = $.querySelector('.warning')
    let names = $.querySelector('.names')
    let personNameInput = $.querySelector('#person-name-input')
    const personName = personNameInput.value.trim()

    if (!personName || personName.length < 3) {
        warning.style.display = 'block'
    } else {
        let combine = document.createElement('li')
        combine.innerHTML = personName
        let hi = names.appendChild(combine)
        personNameInput.value = ''
        warning.style.display = 'none'
        random.push(hi)

        personNameInput.focus()
        combine.addEventListener('click', () => {
            const index = random.indexOf(hi)
            random.splice(index, 1)
            combine.remove()
            console.log(index)
        })
        console.log(random)
    }
}

$.addEventListener('DOMContentLoaded', () => {
    let body = document.querySelector('body')
    let mainSection = document.querySelector('.main-div')
    let startBtn = document.querySelector('.start-btn')
    let addtBtn = $.querySelector('.add')
    let personNameInput = $.querySelector('#person-name-input')
    let ran = $.querySelector('.random-name')
    const focus = () => {
        personNameInput.focus()
    }
    focus()

    personNameInput.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            addPersonToList()
        }
    })

    addtBtn.addEventListener('click', addPersonToList)
    startBtn.addEventListener('click', () => {
        let randomIndex = Math.floor(Math.random() * random.length)
        let randomName = random[randomIndex]
        ran.innerHTML = randomName.innerHTML + ' ' + 'you must pay the bill'
        mainSection.style.display = 'none'
        ran.style.visibility = 'visible'
    })
})
