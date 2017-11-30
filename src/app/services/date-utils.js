const moment = require('moment')
require('moment/locale/es')
const ISO_FORMAT = 'YYYY-MM-DD'

// Default locale:
let locale = 'es'
export function setLocale(localeCode) {
  locale = localeCode
}

export function isoToday() {
  return moment().format(ISO_FORMAT)
}

export function isoTomorrow() {
  return moment().add(1, 'days').format(ISO_FORMAT)
}

export function isoFuture(daysFromNow) {
  return moment().add(daysFromNow, 'days').format(ISO_FORMAT)
}

export function localizedToday() {
  return localize(moment())
}

export function localizedTomorrow() {
  return localize(moment().add(1, 'days'))
}

export function localizedFromIso(isoDate) {
  return localize(moment(isoDate, ISO_FORMAT))
}

function localize(date) {
  return removeLeadingZeros(toTitleCase(date.locale(locale).format(`dddd, DD [${localizedSeparator(locale)}] MMMM`)))
}

function removeLeadingZeros(formattedDate) {
  return formattedDate.replace(/ 0+/g, ' ')
}

function localizedSeparator(locale) {
  if (locale === 'en') return 'of'
  return 'de'
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() })
}

export function year(isoDate) {
  return isoDate.substring(0, 4)
}
