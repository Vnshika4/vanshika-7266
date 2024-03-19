let string = ""
let buttons = document.querySelectorAll('.button')
let op = ["/","*","-","+","%",".","1","2","3","4","5","6","7","8","9","0"]
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            calc()
            document.querySelector('input').value = string
        }
        else if (e.target.innerHTML == 'C') {
            string = ""
            document.querySelector('input').value = string
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1)
            document.querySelector('input').value = string
        }
        else {
            string = string + e.target.innerHTML
            document.querySelector('input').value = string
        }
    })
})
document.addEventListener('keydown', function (event) {
    let key = event.key
    if (key === "Enter") {
        calc()
        document.querySelector('input').value = string
    }
    else if (key == "Escape") {
        string = ""
        document.querySelector('input').value = string
    }
    else if (key === "Backspace") {
        string = string.slice(0, -1)
        document.querySelector('input').value = string
    }
    else if (op.includes(key)) {
        string = string + key
        document.querySelector('input').value = string
    }
})
function calc() {
    try {
        string = string.replace("%", "/100")
        if (string.includes('//')) {
            throw error();
        }
        else {
            string = eval(string).toFixed(2)
        }
        if (isNaN(string) || string == "Infinity") {
            string = "Cant Divide by 0"
        }
    }
    catch (error) {
        string = "WRONG INPUT"
    }
}