import express from 'express'
const router = express.Router()

import {getAllTasks, getTaskById, createTask, updateTask, deleteTask } from './controller'


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTaskById).put(updateTask).delete(deleteTask)

export default router