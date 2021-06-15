var amountSquares = 6;

let color = generateRandomColors(amountSquares)

var square = document.querySelectorAll(".square")

var resetBtn = document.querySelector("#reset")

var pickedColor = pickColor()

var colorDisplay = document.querySelector("#colorDisplay")

var message = document.querySelector("#message")

var h1 = document.querySelector("h1")

var difficultySelector = document.getElementsByClassName("difficulty-selector")

init()

function init() {
    colorDisplay.textContent = pickedColor
    colorSquare()
    numberOfSquares()
    playAgain()
    level()
}

function colorSquare() {
    for (var i = 0; i < color.length; i++) {
        square[i].style.backgroundColor = color[i]
    }
}

function numberOfSquares() {
    for (var i = 0; i < square.length; i++) {
        square[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor == pickedColor) {
                message.textContent = "CORRECT";
                h1.style.backgroundColor = clickedColor;
                changeColors(clickedColor)
                resetBtn.textContent = "PLAY AGAIN?"
            } else {
                this.style.backgroundColor = "#314c5f";
                message.textContent = "TRY AGAIN"
                resetBtn.textContent = "NEW COLORS"
            }
        })
    }
}

function changeColors(clickedColor) {
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = clickedColor;
    }
}

function pickColor() {
    var num = Math.floor(Math.random() * color.length);
    return color[num];
}

function randomColor() {
    var color1 = Math.floor(Math.random() * 256)
    var color2 = Math.floor(Math.random() * 256)
    var color3 = Math.floor(Math.random() * 256)

    return `rgb(${color1}, ${color2}, ${color3})`
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr[i] = randomColor()
    }
    return arr;
}

function playAgain() {
    resetBtn.addEventListener("click", function () {
        resetBtn.textContent = "NEW COLORS"
        message.textContent = ""
        h1.style.backgroundColor = ""
        reset()
    })
}

function reset() {
    color = generateRandomColors(amountSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    for (var i = 0; i < square.length; i++) {
        if (color[i]) {
            square[i].style.backgroundColor = color[i]
            square[i].style.display = "block"
        } else {
            square[i].style.display = "none"
        }
    }
}

function level() {
    for (let i = 0; i < difficultySelector.length; i++) {
        difficultySelector[i].addEventListener("click", function () {
            difficultySelector[0].classList.remove("selected")
            difficultySelector[1].classList.remove("selected")
            this.classList.add("selected")
            this.textContent == "EASY" ? amountSquares = 3 : amountSquares = 6;
            reset();
        })
    } 
}