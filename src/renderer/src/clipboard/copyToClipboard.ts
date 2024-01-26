import Swal from 'sweetalert2'

import { setGradient } from '../helpers'
import { HTMLInputs } from '../interfaces'

export const copyToClipboard = async (inputs: HTMLInputs, orientation: string): Promise<void> => {
  const gradient = setGradient(inputs.first.value, inputs.second.value, orientation)

  if (!navigator.clipboard) {
    Swal.fire('Error', 'API unsupported', 'error')

    return
  }

  await navigator.clipboard.writeText(gradient)

  Swal.fire({
    title: 'Success',
    text: 'Gradient copy to clipboard',
    icon: 'success',
    toast: true,
    position: 'top-end',
    timer: 5000,
    timerProgressBar: true
  })
}
