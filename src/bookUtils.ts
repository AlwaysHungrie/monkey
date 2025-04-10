import path from 'path'
import { config } from './config'
import { robotExecCommand } from './utils/execUtils'
import { createFolder } from './utils/fileUtils'
import { exec } from 'child_process'
import fs from 'fs'
const { defaultLocation } = config


export const openBooksFolder = async (prefix: string = 'cd') => {
  const folderPath = await createFolder(defaultLocation)

  // check if the example file exists
  const exampleFile = path.join(folderPath, config.exampleFile)
  if (!fs.existsSync(exampleFile)) {
    await fs.promises.writeFile(exampleFile, config.exampleFileContents)
  }

  // open the folder
  const command = `${prefix} ${folderPath}`
  await robotExecCommand(command)
}
