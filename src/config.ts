const exampleFileContents = `**Command**

Your command goes here, it will be used to run the command in the terminal using monkey do "[command]"

**Description**

Describe what this command does, it will be used to decide if this command needs to modified and run if required to perform a task

**Variables**

Your script can contain variables. Monkey will ask you to input the variables interactively if not provided using --variables or -v flag

**Script**

All terminal commands entered here will be executed in order
`


export const config = {
  defaultLocation: '/.monkey-books',
  exampleFile: 'example.md',
  exampleFileContents,
}
