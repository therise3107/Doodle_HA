const getSafeDate = (timestamp?: string | number) => {
  if (timestamp == null || timestamp === undefined) return new Date()
  if (isNaN(Number(timestamp))) return new Date()

  return new Date(Number(timestamp))
}

const formatMinsToTwoDigits = (mins: number) => {
  if (mins / 10 < 1) return `0${mins}`

  return mins
}

export const formatDateToHumanReadableFormat = (timestamp?: number | string, format = 'dd mm yyyy') => {
  const date = getSafeDate(timestamp)
  const day = date.getDate()
  const month = date.toLocaleString('en-us', { month: 'short' })
  const year = date.getFullYear()
  const hour = date.getHours()
  const mins = formatMinsToTwoDigits(date.getMinutes())

  // Todo we can extend the format to rearrange the return according to the string
  // parsing and replacing of dd with day so on and forth

  return `${day} ${month} ${year} ${hour}:${mins}`
}

const WEEK_IN_MINS = 60 * 24 * 7

export const getNMinsBeforeDate = (mins: number = WEEK_IN_MINS) => {
  return String(new Date().getTime() - mins * 60000)
}
