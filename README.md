# Monkey

Intelligent terminal automation

## Usage

Monkey can perform a task after it has been registered.
To create a new task, run the following command to open the task folder, run (replace `cursor` with any program available like `code`, `vim` etc.):

```bash
monkey open -p cursor
```

Task folder will have a `example.md` file. Modify this file with your specific task details and commands as given in the example file. Save a copy in the same folder with a new name.

## Installation

```bash
npm i -g @always_hungrie/monkey
monkey [command]
```

or

```bash
npx @always_hungrie/monkey [command]
```