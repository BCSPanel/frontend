export function formatTime(d: Date, enableZone: boolean) {
  const y = d.getFullYear().toString()
  const m = (d.getMonth() + 1).toString().padStart(2, '0')
  const date = d.getDate().toString().padStart(2, '0')

  const h = d.getHours().toString().padStart(2, '0')
  const min = d.getMinutes().toString().padStart(2, '0')
  const s = d.getSeconds().toString().padStart(2, '0')

  let str = `${y}-${m}-${date} ${h}:${min}:${s}`

  if (enableZone) {
    const timeZoneOffset = -d.getTimezoneOffset()
    let zone = 'GMT'
    if (timeZoneOffset !== 0) {
      zone += timeZoneOffset < 0 ? '-' : '+'
      const absTZO = Math.abs(timeZoneOffset)
      zone += String(Math.floor(absTZO / 60)).padStart(2, '0')
      zone += String(absTZO % 60).padStart(2, '0')
    }
    str += zone
  }

  return str
}
