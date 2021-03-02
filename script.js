let number = document.getElementById(`number`)
let piButton = document.getElementById(`piButton`)
let box = document.getElementById(`box`)

piButton.addEventListener(`click`, calculatePi)

number.addEventListener(`keydown`, keyPressed)
number.focus()

function calculatePi() {
  let numberValue = number.value.trim()

  if (numberValue != `` && !isNaN(numberValue)) {
    if (numberValue < 6 || numberValue > 100663296) {
      box.innerHTML = `Number of sides must be between 6 and 100,663,296.`
    }
    else {
      let sides = []
      sides[6] = 1

      for (let i = 12; i <= numberValue; i *= 2) {
        let a = Math.sqrt(1 - Math.pow(sides[i/2] / 2, 2))
        let b = 1 - a

        sides[i] = Math.sqrt(Math.pow(b, 2) + Math.pow(sides[i/2] / 2, 2))
      }

      box.innerHTML = ``
      createRow(`# of Sides`, `<strong>Pi Approximation</strong>`)

      for (let i = 6; i <= numberValue; i *= 2) {
        let c = i * sides[i]
        let pi = c / 2

        createRow(i, pi)
      }
    }
  }

  number.focus()
}

function keyPressed(event) {
  if (event.keyCode == 13) {
    calculatePi()
  }
}

function createRow(key, value) {
  let row = document.createElement(`div`)
  row.classList.add(`row`)
  box.appendChild(row)

  let keyDiv = document.createElement(`div`)
  keyDiv.classList.add(`key`)
  keyDiv.innerHTML = key
  row.appendChild(keyDiv)

  let valueDiv = document.createElement(`div`)
  valueDiv.classList.add(`value`)
  valueDiv.innerHTML = value
  row.appendChild(valueDiv)
}