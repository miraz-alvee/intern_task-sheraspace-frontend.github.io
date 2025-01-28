import AddTaskForm from "./components/AddTaskForm"
import TaskList from "./components/TaskList"

function App() {


  return (
    <>

      <div className="p-10 text-center">
        <h1 className="text-5xl font-bold mb-4 ">My Todo App</h1>
        <div className="mt-10">
          <AddTaskForm></AddTaskForm>
        </div>
        <TaskList></TaskList>

      </div>
    </>
  )
}

export default App
