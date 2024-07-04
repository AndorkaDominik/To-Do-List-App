import React, {useState} from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask(){
        if (newTask.trim() !== "") { 
        setTasks(t => [...t, newTask]);
        setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index - 1];
            updatedTasks[index - 1] = temp;
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index + 1];
            updatedTasks[index + 1] = temp;
            setTasks(updatedTasks);
        }
    }

    return (
        <>
            <div className="to-do-list">
                <h1>To-Do-List</h1>
                <h4>Andorka Dominik</h4>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter a task..."
                        value={newTask}
                        onChange={handleInputChange}
                        />
                    <button 
                        className="add-button"
                        onClick={addTask}>
                            Add</button>
                </div>
                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <div className="btn-container">
                            <button 
                                className="delete-button" 
                                onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                            <button 
                                className="move-button" 
                                onClick={() => moveTaskUp(index)}>
                                ☝️
                            </button>
                            <button 
                                className="move-button" 
                                onClick={() => moveTaskDown(index)}>
                                👇
                            </button>
                            </div>
                        </li>
                    )}
                </ol>
            </div>
        </>
    );
}

export default ToDoList;
