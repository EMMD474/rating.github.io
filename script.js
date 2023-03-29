
const get = document.getElementsByClassName("rate")
for (var i = 0; i < get.length; i++) {
    button = get[i]
    button.addEventListener("click", rateClicked)
}

var record = ''

function rateClicked(event) {
    button = event.target
    var collect = button.innerText
    record = collect
    rate(record)
}

const nana  = document.querySelector('#display')
function rate(record) {
    nana.innerText = "You selected" +  " " + record + " " + "out of 5"
} 
const submit = document.getElementsByClassName("submit")[0]
submit.addEventListener("click", submitClicked)

function submitClicked() {
    document.querySelector(".toggle").style.display = "flex"
    document.querySelector('.toggle2').style.display = "none"
}