import React, {useState, useEffect} from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [isConsentGiven, setIsConsentGiven] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('consent');
        if (consent === 'true') {
            const savedTasks = localStorage.getItem('tasks');
            if (savedTasks) {
                setTasks(JSON.parse(savedTasks));
            } else {
                setTasks(["Eat Breakfast", "Take a shower", "Walk the dog"]);
            }
            setIsConsentGiven(true);
        }
    }, []);

    useEffect(() => {
        if (isConsentGiven) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks, isConsentGiven]);

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            addTask();
        }
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

     function handleConsent() {
        localStorage.setItem('consent', 'true');
        setIsConsentGiven(true);
    }

    return (
        <>
             {!isConsentGiven && (
                <div className="consent-notification">
                    <h1>To-Do-List</h1>
                    <p>We use your local storage to save your tasks. Please accept to continue.</p>
                    <button onClick={handleConsent}>Accept</button>
                </div>
            )}
            {isConsentGiven && (
            <div className="to-do-list">
                <h1>To-Do-List</h1>
                <h4>Andorka Dominik</h4>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter a task..."
                        value={newTask}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyPress}
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
            )}
        </>
    );
}

export default ToDoList;
