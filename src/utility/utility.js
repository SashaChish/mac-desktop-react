export function dateNow() {
  const [day, month, dayOfMonth] = new Date().toDateString().split(' ')
  let MM = new Date().getMinutes()
  let HH = new Date().getHours()

  MM = MM < 10 ? `0${MM}` : MM

  HH = HH < 10 ? `0${HH}` : HH

  const date = `${day} ${dayOfMonth} ${month} ${HH}:${MM}`

  return date
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
