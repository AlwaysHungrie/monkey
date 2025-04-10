import Robot from '@hurdlegroup/robotjs'

export const newTab = async () => {
  // cmd + t
  Robot.keyTap('t', 'command')
  // wait for the new tab to open
  await new Promise(resolve => setTimeout(resolve, 1200))

  // TODO: mouse needs to be moved in order for focus to be set
}

export const runCommand = async (command: string) => {
  // type the command
  Robot.setKeyboardDelay(1)
  console.log('typing command', command)
  Robot.typeString(command)
  // enter
  Robot.keyTap('enter')
}
