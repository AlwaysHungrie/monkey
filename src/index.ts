#!/usr/bin/env node

import { Command } from 'commander'
import { printBold, printColored, printRainbow } from './printUtils'

const program = new Command()

// Set up the CLI details
program
  .name('monkey')
  .description('A CLI tool to automate your terminal')
  .version('0.0.1')

// Add the primary command
program
  .argument('[text...]', 'Text to print to console')
  .option(
    '-c, --color <color>',
    'Color of the text (red, green, blue, yellow, cyan, magenta)'
  )
  .option('-b, --bold', 'Print the text in bold')
  .action((words: string[], options) => {
    const text = words.join(' ') || 'Hello, World!'

    if (options.color) {
      printColored(text, options.color, options.bold)
    } else if (options.bold) {
      printBold(text)
    } else {
      printRainbow(text)
    }
  })

// Parse the arguments
program.parse()
