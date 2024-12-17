Here’s a concise yet informative README for your To-Do List project:

---

# To-Do List Application

A simple, interactive To-Do List built using HTML, CSS, and JavaScript, allowing users to add, update, and delete tasks dynamically.

## Features

- **Add Tasks**: Input a task and click "Add ToDo" to add it to the list.
- **Update Tasks**: Modify any existing task with a new value.
- **Delete Tasks**: Remove a task from the list.

## Files

1. **`index.html`**: 
   - The main structure of the application.
   - Contains the input field and button for adding tasks.

2. **`index.css`**:
   - Styles for the application.
   - Classes:
     - `.btn`: General button styling.
     - `.del`: Delete button (red background, white text).
     - `.up`: Update button (yellow background, black text).

3. **`script.js`**:
   - Core JavaScript functionality.
   - Functions:
     - `addTodo()`: Adds a new task to the list.
     - `update(index)`: Updates an existing task with a new value.
     - `deleteTodo(index)`: Deletes a specific task.

## How It Works

1. **Adding a Task**:
   - Enter a task in the input field.
   - Click the "Add ToDo" button to append the task to the list.
   - Each task is displayed with "Delete" and "Update" buttons.

2. **Updating a Task**:
   - Click the "Update" button next to the task you want to modify.
   - Enter the new task value in the input field and click "Update" again.

3. **Deleting a Task**:
   - Click the "Delete" button to remove the corresponding task from the list.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Open `index.html` in a browser to run the application.

## Code Highlights

- **Dynamic DOM Manipulation**:
  - Tasks are dynamically added as `<div>` elements using `document.createElement()` and appended to the `<body>`.
  
- **Validation**:
  - Prevents adding or updating with empty values using `alert()`.

- **Modular Design**:
  - Each operation (Add, Update, Delete) is encapsulated in its own function for clarity and reusability.

## Demo

![Demo Screenshot](path/to/screenshot.png)

---

This README ensures clarity about the project, its functionality, and setup for users and collaborators on GitHub.
