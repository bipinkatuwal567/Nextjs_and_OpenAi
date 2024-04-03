import prisma from "../../utils/db"

const prismaHandlers = async() => {
    await prisma.task.create({
        data: {
            content: "Wake Up"
        },
    })

    const allTasks = await prisma.task.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })

    return allTasks
}

export default async function PrismaExamplePage(){
    const tasks = await prismaHandlers();
    return(
        <div>
            <h1 className="text-5xl">Prisma Example</h1>
            {
                tasks.map(task => {
                    return(
                        <h2 key={task.id} className="text-xl py-2">
                            {task.content}
                        </h2>
                    )
                })
            }
        </div>
    )
}