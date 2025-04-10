import fs from 'fs'
import path from 'path'
import { execCommand } from './execUtils'

// create a folder at location if it doesn't exist
export const createFolder = async (folderPath: string) => {
  const home = (await execCommand('cd ~ && pwd')) as string
  const fullPath = path.join(home, folderPath)
  if (!fs.existsSync(fullPath)) {
    await fs.promises.mkdir(fullPath, { recursive: true })
  }
  return fullPath
}
