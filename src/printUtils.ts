export function printColored(
  text: string,
  color: string,
  bold: boolean = false
): void {
  const colors: Record<string, string> = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
  }

  const reset = '\x1b[0m'
  const boldCode = bold ? '\x1b[1m' : ''

  if (colors[color.toLowerCase()]) {
    console.log(`${boldCode}${colors[color.toLowerCase()]}${text}${reset}`)
  } else {
    console.log(`${boldCode}${text}${reset}`)
  }
}

export function printBold(text: string): void {
  console.log(`\x1b[1m${text}\x1b[0m`)
}

export function printRainbow(text: string): void {
  const colors = [
    '\x1b[31m',
    '\x1b[33m',
    '\x1b[32m',
    '\x1b[36m',
    '\x1b[34m',
    '\x1b[35m',
  ]
  const reset = '\x1b[0m'

  let rainbowText = ''
  for (let i = 0; i < text.length; i++) {
    const colorIndex = i % colors.length
    rainbowText += `${colors[colorIndex]}${text[i]}`
  }

  console.log(`${rainbowText}${reset}`)
}