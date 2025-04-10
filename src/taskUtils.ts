import { parseAvailableCommands } from "./utils/commandUtils"
import PromptSync from 'prompt-sync'
import { robotExecCommands } from "./utils/execUtils"
const prompt = PromptSync()

export const getValueFromUser = async (variable: string) => {
  const value = prompt(`Enter the value for ${variable}: `)
  return value ?? ''
}

export const runCommand = async (userCommand: string, variables: string[]) => {
  const availableCommands = await parseAvailableCommands()
  const command = availableCommands.find(c => c.command === userCommand)
  if (!command) {
    console.log(`Monkey doesn't know how to ${userCommand}, register a new task for this command by running 'monkey open'`)
    return
  }

  const variablesMap = new Map<string, string>()
  variables.forEach(variable => {
    const [key, value] = variable.split('=')
    variablesMap.set(key, value)
  })

  let script = command.script

  for (const variable of command.variables) {
    let value = variablesMap.get(variable)
    if (!value) {
      value = await getValueFromUser(variable)
    }
    script = script.replaceAll(`$${variable}`, value)
  }

  await robotExecCommands(script.split('\n').filter(line => line.trim() !== ''))
}
