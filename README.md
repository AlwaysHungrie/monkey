# Monkey

Intelligent terminal automation

## Installation

```bash
npm i -g @always_hungrie/monkey
monkey [command]
```

or

```bash
npx @always_hungrie/monkey [command]
```

## Important

Whenever a new tab is opened in the terminal, You will need to move the mouse cursor on screen.
This is necessary for any command like `monkey run` or `monkey open` and user generated scripts.

## Usage

Monkey can perform any task it has been taught.
Once a task is registered, it can be run by running:

```bash
monkey run <command> -v [<variablename=value>]
```

## Registering a task

To create a new task, run the following command to open the task folder, run (replace `cursor` with any program available like `code`, `vim` etc.):

```bash
monkey open -p cursor
```

Task folder will have a `example.md` file. Modify this file with your specific task details and commands as given in the example file and save in the same folder with a different name.

### Task file

This is the example of a hello world task. Save this file as `hello.md` in the same folder where example.md is.

```md
**Command**

hello world

**Description**

This command will print "hello world, [name of the user]" to the terminal

**Variables**

MONKEY_USERNAME

**Script**

echo "hello world, $MONKEY_USERNAME"
```

### Variables

Variables can be passed while running the task.

```bash
monkey run hello world -v MONKEY_USERNAME=John
```

If not passed, you will be prompted to enter the values.
All the variables present in the script section will be replaced with the actual values
and then executed.