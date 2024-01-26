import { HTMLInputs } from '../interfaces'
import { setGradient } from './setGradient'

export const setOrientation = (
  orientation: string,
  newOrientation: string,
  buttonElement: HTMLButtonElement,
  inputs: HTMLInputs
): void => {
  const body = document.querySelector('body')

  orientation = newOrientation

  const activeButton = document.querySelectorAll('.active')

  activeButton.forEach((button) => {
    button.classList.remove('active')
  })

  if (buttonElement.classList.contains('active')) {
    buttonElement.classList.remove('active')
  } else {
    buttonElement.classList.add('active')
  }

  body!.style.background = setGradient(inputs.first.value, inputs.second.value, orientation)
}
