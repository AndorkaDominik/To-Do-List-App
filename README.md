# To-Do List Application

A simple and interactive To-Do List application built with React. This app allows you to add, delete, and rearrange tasks to keep track of your daily activities.

![To-Do-List App Screenshot](./.github/screen.png)

## Features

- **Add Tasks**: Enter a task in the input field and click 'Add' to include it in your list.
- **Delete Tasks**: Remove a task from your list by clicking the 'Delete' button.
- **Move Tasks Up/Down**: Reorder tasks by moving them up or down the list using the respective buttons.

## Code Overview

#### `ToDoList`

This is the main component of the application. It includes the following states and functions:

- **States**
  - `tasks`: An array of tasks.
  - `newTask`: A string for the new task input.

- **Functions**
  - `handleInputChange(event)`: Updates `newTask` state based on the input value.
  - `addTask()`: Adds a new task to the `tasks` array if the input is not empty.
  - `deleteTask(index)`: Removes a task from the `tasks` array based on its index.
  - `moveTaskUp(index)`: Moves a task one position up in the `tasks` array.
  - `moveTaskDown(index)`: Moves a task one position down in the `tasks` array.

### UI Elements

- **Input Field**: Allows users to type in a new task.
- **Add Button**: Adds the typed task to the list.
- **Task List**: Displays tasks in an ordered list with options to delete or move each task up or down.

