import { reset } from './../utils/storage'
import { ActMasterActionNamed } from 'vue-act-master'

export const resetState: ActMasterActionNamed = {
  name: 'State',
  exec () {
    reset()
    setTimeout(() => {
      window.location.reload()
    })
  },
}
