import { exec } from "child_process"
import { newTab, runCommand } from "./monkeyUtils"


// execute a command and return the output
export const execCommand = async (command: string) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        // console.error('Error executing command:', error)
        reject(error)
      } else {
        // console.log('Command executed successfully')
        resolve(stdout.trim())
      }
    })
  })
}

// open a new terminal tab and execute a command using robot.js
export const robotExecCommand = async (command: string) => {
  await newTab()
  await runCommand(command)

  // TODO: figure out how to get the output of the command
}
