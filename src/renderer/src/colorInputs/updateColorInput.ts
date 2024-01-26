import { setGradient } from '../helpers'

export const updateFirstColor = (
  event: Event,
  body: HTMLBodyElement,
  secondInput: HTMLInputElement,
  orientation: string
): void => {
  const input: HTMLInputElement = event.target as HTMLInputElement

  body!.style.background = setGradient(input.value, secondInput.value, orientation)
}

export const updateSecondColor = (
  event: Event,
  body: HTMLBodyElement,
  firstInput: HTMLInputElement,
  orientation: string
): void => {
  const input: HTMLInputElement = event.target as HTMLInputElement

  body!.style.background = setGradient(firstInput.value, input.value, orientation)
}
