import { readFiles } from './fileUtils'
import { config } from '../config'
import fs from 'fs'

type Command = {
  command: string
  description: string
  variables: string[]
  script: string
}

export const parseSection = (contents: string, sectionName: string) => {
  const contentLines = contents.split('\n')
  const startIndex = contentLines.findIndex(line => line.trim() === sectionName)
  
  if (startIndex === -1) {
    return '' // Section not found
  }

  const sectionLines = contentLines.slice(startIndex + 1)
  const endIndex = sectionLines.findIndex(line => line.startsWith('**') && line.endsWith('**'))

  const relevantLines = endIndex === -1 ? sectionLines : sectionLines.slice(0, endIndex)
  return relevantLines.join('\n').trim()
}

export const parseAvailableCommands = async () => {
  const files = await readFiles(config.defaultLocation)
  const commands = files.map((file) => {
    const { filename, content } = file
    
    if (filename === config.exampleFile) {
      return null
    }
    
    const command = parseSection(content, "**Command**")
    if (!command) {
      return null
    }
    const description = parseSection(content, "**Description**")
    
    const variablesString = parseSection(content, "**Variables**")
    let variables: string[] = []
    if (variablesString) {
      variables = variablesString.split('\n').map(line => line.trim()).filter(line => line !== '')
    }
    
    const script = parseSection(content, "**Script**")
    return {
      command,
      description,
      variables,
      script
    }
  }).filter(Boolean) as Command[]
  return commands
}
