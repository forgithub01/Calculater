function calc(b) {
    var a = document.getElementById('abc')
    a.value += b
}

function ans() {
    var v = document.getElementById('abc')
    v.value = eval(v.value)
}
function empty() {
    var h = document.getElementById('abc')
    h.value = ""
}
