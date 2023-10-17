let $ = document
let body = document.querySelector('body');
let mainSection = document.querySelector('.main-div');
let startBtn = document.querySelector('.start-btn');
let addtBtn = $.querySelector('.add');
let names = $.querySelector('.names');
let input = $.getElementById('nameValue');
let warning = $.querySelector('.warning');
let ran = $.querySelector('.random-name');
let random = []
focus()
function focus() {
    input.focus()
}

body.addEventListener('keydown', function (event) {


    if (event.keyCode === 13) {
        if (!input.value == "" && !input.value.startsWith(" ") && input.value.length>2) {
            let combine = document.createElement('li')
            combine.innerHTML = input.value.trim()
            let hi = names.appendChild(combine)
            input.value = ""
            warning.style.display = 'none'
            random.push(hi);
            input.focus()

        }
        else {
            warning.style.display = 'block'
        }



    }
})

addtBtn.addEventListener('click', function () {


    if (!input.value == "") {
        let combine = document.createElement('li')
        combine.innerHTML = input.value
        names.appendChild(combine)
        input.value = ""
        warning.style.display = 'none'
        focus()
        function focus() {
            input.focus()
        }

    }
    else {
        warning.style.display = 'block'
    }


})
startBtn.addEventListener('click', function () {
    let randomIndex = Math.floor(Math.random() * random.length);
    let randomName = random[randomIndex]
    ran.innerHTML = randomName.innerHTML+ ' ' +'you must pay the bill'
    mainSection.style.display = 'none'
    ran.style.visibility = 'visible'

})






