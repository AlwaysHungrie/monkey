const exampleFileContents = `**Command**

Your command goes here, it will be used to run the command in the terminal using monkey do "[command]"
Modify this file and save it with a new name in the same folder in order to register a new command with monkey.
Warning: Do not change the structure of this file (including the section headers), failing to do so will result in the command not being registered.

eg: 
\`\`\`
hello world
\`\`\`

**Description**

Describe what this command does, it will be used to decide if this command needs to modified and run if required to perform a task

eg: 
\`\`\`
This command will print "hello world, [name of the user]" to the terminal
\`\`\`

**Variables**

Your script can contain variables. Monkey will ask you to input the variables interactively if not provided using --variables or -v flag

eg: 
\`\`\`
MONKEY_USERNAME
\`\`\`

**Script**

All terminal commands entered here will be executed in order

eg:
\`\`\`
echo "hello world, $MONKEY_USERNAME"
\`\`\`
`


export const config = {
  defaultLocation: '/.monkey-books',
  exampleFile: 'example.md',
  exampleFileContents,
}
