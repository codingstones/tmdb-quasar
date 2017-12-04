import { withParams } from 'vuelidate/lib'

export const isFutureDatetime = withParams({ type: 'isFutureDatetime' }, selectedDatetime => {
  if (selectedDatetime === '') return true
  let selected = new Date(selectedDatetime).getTime()
  let now = Date.now()
  return selected > now
})
