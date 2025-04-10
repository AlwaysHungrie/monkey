import Robot from '@hurdlegroup/robotjs'

export const newTab = async () => {
  // cmd + t
  Robot.keyTap('t', 'command')
  // wait for the new tab to open
  await new Promise(resolve => setTimeout(resolve, 600))
}

export const runCommand = async (command: string) => {
  // type the command
  Robot.typeString(command)
  await new Promise(resolve => setTimeout(resolve, 600))
  // enter
  Robot.keyTap('enter')
}
