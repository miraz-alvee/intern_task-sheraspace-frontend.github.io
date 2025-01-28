import React, { useState } from "react";

const AddTaskForm = () => {
    const [taskName, setTaskName] = useState("");

    const API_URL = "http://127.0.0.1:5000";

    const handleAddTask = async () => {
        try {
            const response = await fetch(`${API_URL}/tasks`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ task_name: taskName }),
            });
            if (response.ok) {
                setTaskName("");
                window.location.reload();
            }
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };

    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Enter new task"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="border rounded p-2 mr-2"/>
                
            <button onClick={handleAddTask}
                className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Task
            </button>
        </div>
    );
};

export default AddTaskForm;
