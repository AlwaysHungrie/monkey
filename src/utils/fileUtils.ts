import fs from 'fs'
import path from 'path'
import { execCommand } from './execUtils'

export const getHomeDirectory = async () => {
  const home = (await execCommand('cd ~ && pwd')) as string
  return home
}

// create a folder at location if it doesn't exist
export const createFolder = async (folderPath: string) => {
  const home = (await getHomeDirectory()) as string
  const fullPath = path.join(home, folderPath)
  if (!fs.existsSync(fullPath)) {
    await fs.promises.mkdir(fullPath, { recursive: true })
  }
  return fullPath
}

// read all files in a folder
export const readFiles = async (
  folderPath: string
): Promise<{ filename: string; filePath: string; content: string }[]> => {
  const home = (await getHomeDirectory()) as string
  const fullPath = path.join(home, folderPath)
  const files = await fs.promises.readdir(fullPath)
  return Promise.all(
    files.map(async (file) => {
      const filePath = path.join(fullPath, file)
      const content = await fs.promises.readFile(filePath, 'utf8')
      return { filename: file, filePath, content }
    })
  )
}
