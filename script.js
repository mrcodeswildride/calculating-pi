let number = document.getElementById(`number`)
let piButton = document.getElementById(`piButton`)
let piParagraph = document.getElementById(`piParagraph`)

piButton.addEventListener(`click`, calculatePi)

number.addEventListener(`keydown`, keyPressed)
number.focus()

function calculatePi() {
  let numberValue = number.value.trim()

  if (numberValue != `` && !isNaN(numberValue)) {
    if (numberValue < 6 || numberValue > 100663296) {
      piParagraph.innerHTML = `Number of sides must be between 6 and 100,663,296.`
    }
    else {
      let side1 = 1
      let numSides = 6

      for (let i = 12; i <= numberValue; i *= 2) {
        let a = Math.sqrt(1 - Math.pow(side1 / 2, 2))
        let b = 1 - a
        let side2 = Math.sqrt(Math.pow(b, 2) + Math.pow(side1 / 2, 2))

        side1 = side2
        numSides = i
      }

      let c = side1 * numSides
      piParagraph.innerHTML = `Pi: ${c / 2}`
    }
  }

  number.focus()
}

function keyPressed(event) {
  if (event.keyCode == 13) {
    calculatePi()
  }
}