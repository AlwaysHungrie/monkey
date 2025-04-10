#!/usr/bin/env node

import { Command } from 'commander'
import { printBold, printColored, printRainbow } from './printUtils'
import { openBooksFolder } from './bookUtils'

const program = new Command()

// Set up the CLI details
program
  .name('monkey')
  .description('Intelligent terminal automation')
  .version('0.0.1')

 program
  .argument('open', 'Open the folder containing scripts')
  .option('-p, --prefix [prefix]', 'Program to be used to open the folder (optional)')
  .action((_, options) => {
    openBooksFolder(options.prefix)
  })

// // Add the primary command
// program
//   .argument('[text...]', 'Text to print to console')
//   .option(
//     '-c, --color <color>',
//     'Color of the text (red, green, blue, yellow, cyan, magenta)'
//   )
//   .option('-b, --bold', 'Print the text in bold')
//   .action((words: string[], options) => {
//     const text = words.join(' ') || 'Hello, World!'

//     if (options.color) {
//       printColored(text, options.color, options.bold)
//     } else if (options.bold) {
//       printBold(text)
//     } else {
//       printRainbow(text)
//     }
//   })

// Parse the arguments
program.parse()
