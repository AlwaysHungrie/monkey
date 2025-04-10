#!/usr/bin/env node

import { Command } from 'commander'
import { openBooksFolder } from './bookUtils'
import { runCommand } from './taskUtils'

const program = new Command()

// Set up the CLI details
program
  .name('monkey')
  .description('Intelligent terminal automation')
  .version('0.0.1')

// Create 'open' command
program
  .command('open')
  .description('Open the folder containing scripts')
  .option('-p, --prefix [prefix]', 'Program to be used to open the folder (optional)')
  .action((options) => {
    openBooksFolder(options.prefix)
  })

// Create 'do' command
program
  .command('do [command...]')
  .description('Perform a saved task')
  .option('-v, --variables [variables...]', 'Variables to be used in the command')
  .action((commandArgs: string[], options: { variables: string[] }) => {
    if (!commandArgs || commandArgs.length === 0) {
      console.log('Please provide a command to run')
      return
    }
    runCommand(commandArgs.join(' '), options.variables)
  })

// Parse the arguments
program.parse()
