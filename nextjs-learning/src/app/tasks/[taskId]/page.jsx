import Link from "next/link";
import { getTask } from "../../../actions/actions"
import EditForm from "../../../components/EditForm"

export default async function TaskSinglePage({params}){
    const task = await getTask(params.taskId);

    return(
        <div className="w-full mb-16">
            <Link href="/tasks" className="btn btn-accent mb-6">back to tasks</Link>
            <EditForm task={task} />
        </div>
    )
}