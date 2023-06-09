import {Request, Response} from 'express';

type TaskType = { id: number; title: string; description: string; status: string };
let tasks: TaskType[] = [{ id: 1, title: 'cleaning', description: 'kitchen', status: 'pending' }, { id: 2, title: 'cleaning', description: 'kitchen', status: 'pending' }, { id: 3, title: 'cleaning', description: 'kitchen', status: 'pending' }, { id: 4, title: 'learning', description: 'morgen', status: 'pending' }, { id: 5, title: 'errands', description: 'afternoon', status: 'pending' }];
let task: TaskType

//create task
export const createTask = (req: Request, res: Response)  => {
    const { title, description } = req.body
    if(!title || !description) {
res.status(400).json({ Success: false, msg: 'no valid data'})
    }
    else {
    
      const taskId: number = tasks[tasks.length-1].id + 1
   
       task = { id: taskId, title: title, description: description, status: 'completed'}
      tasks = [...tasks, task]
          res.status(200).json([{id: taskId}, {title: title}, {description: description}, {status: 'completed'}])
          console.log(tasks)
    }
}
//get all tasks
export const getAllTasks =  (req: Request, res: Response)  => {
    const { limit, offset} = req.query
 console.log(limit, "the limit")
   // const newTasks = tasks.map((task) => {
   //   const { id, title, description, status } = task
   //   return { id, title, description, status }
   // })
   let sortedTasks = [...tasks]
   
   if (offset) {
     sortedTasks = sortedTasks.slice(Number(offset), sortedTasks.length)
 
   }
   if (limit) {
     sortedTasks = sortedTasks.slice(0, Number(limit))
   }
   if (sortedTasks.length < 1) {
     return res.status(200).json({ sucess: true, data: [] })
   }
   res.status(200).json(sortedTasks)
 }
//get by id
 export const getTaskById = (req: Request, res: Response) => {
    const {id} = req.params
     const task = tasks.find((task) => task.id === Number(id))
     console.log(task)
     res.status(200).json(task)
  }
//update task
  export const updateTask = (req: Request, res: Response) => {
    const { id } = req.params
    const { title, description, status } = req.body
  
    const task = tasks.find((task) => task.id === Number(id))
  
    if (!task) {
      return res
        .status(404)
        .json({ success: false, msg: `no task with id ${id}` })
    }
    if (task.status !== 'pending' && task.status !=='completed')
    {
      return res
      .status(404)
      .json({ success: false, msg: `no task with id ${id}` })
    }
     const newTasks = tasks.map((task) => {
      if (task.id === Number(id)) {
        if (title) {task.title = title } 
         if (description) {task.description = description} 
         if (status) { task.status = status}
         else return
      }
      return task
    })
    res.status(200).json({ success: true, data: newTasks })
  
  }

//delete task
  export const deleteTask =  (req: Request, res: Response) => {
    const { taskId } = req.params
    
    const sortedTasks = tasks.filter((task) => task.id !== Number(taskId))
    tasks = [...sortedTasks]
    if (!tasks.find((task) => task.id === Number(taskId))){
     return res
     .status(200)
     .json({ success: true, msg: `task with id ${taskId} is deleted` })
    }
    }