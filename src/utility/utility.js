export function dateNow() {
  const date = new Date()
  const [day, month, dayOfMonth] = date.toDateString().split(' ')
  let MM = date.getMinutes()
  let HH = date.getHours()

  MM = MM < 10 ? `0${MM}` : MM
  HH = HH < 10 ? `0${HH}` : HH

  return `${day} ${dayOfMonth} ${month} ${HH}:${MM}`
}

export function styledImg(images) {
  switch (images.length) {
    case 1:
      return {
        flexBasis: '50%',
        height: '50%',
      }
    case 2:
      return {
        flexBasis: '55%',
        height: '40%',
      }
    default:
      return {
        flexBasis: '26%',
        height: '40%',
      }
  }
}
