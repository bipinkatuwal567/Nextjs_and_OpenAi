import TaskForm from "../../components/TaskForm"
import TaskList from "../../components/TaskList"
import DeleteForm from "../../components/DeleteForm"

export default function TasksPage(){
    return(
        <div className="max-w-xl">
            <TaskForm />
            <TaskList />
        </div>
    )
}