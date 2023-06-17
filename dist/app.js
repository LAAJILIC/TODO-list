"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// type TaskType = { id: number; title: string; description: string; status: string };
// let tasks: TaskType[] = [{ id: 1, title: 'cleaning', description: 'kitchen', status: 'pending' }, { id: 2, title: 'cleaning', description: 'kitchen', status: 'pending' }, { id: 3, title: 'cleaning', description: 'kitchen', status: 'pending' }, { id: 4, title: 'learning', description: 'morgen', status: 'pending' }, { id: 5, title: 'errands', description: 'afternoon', status: 'pending' }];
// let task: TaskType
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/tasks', router_1.default);
//let ids: number[] = [0];
// //1 Post method = input by the user
// app.post('/tasks', (req: Request, res: Response)  => {
//     const { title, description } = req.body
//     if(!title || !description) {
// res.status(400).json({ Success: false, msg: 'no valid data'})
//     }
//     else {
//       //let id: number = Math.floor(Math.random() * 100)
//       const taskId: number = tasks[tasks.length-1].id + 1
//       // if (!ids.indexOf(id)) {
//       //   ids =  [...ids, id]
//       //   console.log(ids)
//        task = { id: taskId, title: title, description: description, status: 'completed'}
//       tasks = [...tasks, task]
//           res.status(200).json([{id: taskId}, {title: title}, {description: description}, {status: 'completed'}])
//           console.log(tasks)
//     //   } else {
//     //   do {
//     //      id = Math.floor(Math.random() * 100)
//     //   }
//     //   while(!ids.indexOf(id))
//     //     return res.status(200).json([{id: id}, {title: title}, {description: description}, {status: 'Success'}])
//     // }
//     }
// })
// //2 get all tasks
// app.get('/tasks', (req: Request, res: Response)  => {
//    const { limit, offset} = req.query
// console.log(limit, "the limit")
//   // const newTasks = tasks.map((task) => {
//   //   const { id, title, description, status } = task
//   //   return { id, title, description, status }
//   // })
//   let sortedTasks = [...tasks]
//   if (offset) {
//     sortedTasks = sortedTasks.slice(Number(offset) + 1, sortedTasks.length - 1)
//   }
//   if (limit) {
//     sortedTasks = sortedTasks.slice(0, Number(limit))
//   }
//   if (sortedTasks.length < 1) {
//     return res.status(200).json({ sucess: true, data: [] })
//   }
//   res.status(200).json(sortedTasks)
// })
// //3  get task by id
// app.get('/tasks/:id', (req: Request, res: Response) => {
//   const {id} = req.params
//    const task = tasks.find((task) => task.id === Number(id))
//    console.log(task)
//    res.status(200).json(task)
// })
// // 4 update a task
// app.put('/tasks/:id', (req: Request, res: Response) => {
//   const { id } = req.params
//   const { title, description, status } = req.body
//   const task = tasks.find((task) => task.id === Number(id))
//   if (!task) {
//     return res
//       .status(404)
//       .json({ success: false, msg: `no task with id ${id}` })
//   }
//   if (task.status !== 'pending' && task.status !=='completed')
//   {
//     return res
//     .status(404)
//     .json({ success: false, msg: `no task with id ${id}` })
//   }
//   const newTasks = tasks.map((task) => {
//     if (task.id === Number(id)) {
//       if (title) {task.title = title } 
//        if (description) {task.description = description} 
//        if (status) { task.status = status}
//        else return
//     }
//     return task
//   })
//   res.status(200).json({ success: true, data: newTasks })
//  // 5 delete task 
// })
//  app.delete('/tasks/:id',  (req: Request, res: Response) => {
//  const { taskId } = req.params
//  const sortedTasks = tasks.filter((task) => task.id !== Number(taskId))
//  tasks = [...sortedTasks]
//  if (!tasks.find((task) => task.id === Number(taskId))){
//   return res
//   .status(200)
//   .json({ success: true, msg: `task with id ${taskId} is deleted` })
//  }
//  })
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map