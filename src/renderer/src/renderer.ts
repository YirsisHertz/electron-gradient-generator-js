import { copyToClipboard } from './clipboard'
import { updateFirstColor, updateSecondColor } from './colorInputs'
import { setOrientation } from './helpers'

import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'normalize.css/normalize.css'

const body = document.querySelector('body')

const firstColorInput = document.getElementById('firstcolor') as HTMLInputElement
const secondColorInput = document.getElementById('secondcolor') as HTMLInputElement

const clipboardButton = document.getElementById('btncopy') as HTMLButtonElement

// eslint-disable-next-line prefer-const
let orientation = 'to right'

const orientationButtons = document.querySelectorAll('.btnOrientation')

function init(): void {
  window.addEventListener('DOMContentLoaded', () => {
    doAThing()
  })
}

function doAThing(): void {
  orientationButtons.forEach((button) => {
    button.addEventListener('click', () => {
      setOrientation(
        orientation,
        `${(button as HTMLButtonElement).dataset.value}`,
        button as HTMLButtonElement,
        {
          first: firstColorInput,
          second: secondColorInput
        }
      )
    })
  })

  clipboardButton.addEventListener('click', () =>
    copyToClipboard({ first: firstColorInput, second: secondColorInput }, orientation)
  )

  firstColorInput.addEventListener('input', (event) =>
    updateFirstColor(event, body!, secondColorInput, orientation)
  )

  secondColorInput.addEventListener('input', (event) =>
    updateSecondColor(event, body!, firstColorInput, orientation)
  )
}

// function replaceText(selector: string, text: string): void {
//   const element = document.querySelector<HTMLElement>(selector)
//   if (element) {
//     element.innerText = text
//   }
// }

init()
