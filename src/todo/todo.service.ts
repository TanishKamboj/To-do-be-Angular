/* eslint-disable prettier/prettier */
import { Body, Injectable } from '@nestjs/common';
import { ToDoInterface, updateTaskInterface } from './todo.interfrace';
import { v4 as uuidv4 } from 'uuid';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UUID } from 'crypto';
@Injectable()
export class TodoService {

    private todoList: ToDoInterface[] = [];

    addTodoTask(@Body() createTodoDto: CreateTodoDto) {
        const taskId = uuidv4();
        this.todoList.push({
            id: taskId,
            title: createTodoDto.title,
            description: createTodoDto.description,
            priorityLevel: createTodoDto.priorityLevel,
            status: createTodoDto.status,
            createdAt: new Date(),
            dueDate: new Date(createTodoDto.dueDate),
            Tags: createTodoDto.Tags
        });
        return {
            status: "Success",
            message: `A task with task id : ${taskId} is created.`
        }
    }

    getAllTasks() {
        return {
            status: "Success",
            message: `Fetched All the data.`,
            data: this.todoList
        }
    }

    getTaskById(id: UUID) {
        const getTasks = this.todoList.filter(obj => obj.id === id);
        return {
            status: "Success",
            data: getTasks
        };
    }

    deleteTask(taskId: UUID) {
        const newList = this.todoList.filter(obj => obj.id !== taskId);
        this.todoList = newList;
        return {
            status: "Success",
            message: `The task with task id :${taskId} is deleted.`
        }
    }

    updateTask(taskId: UUID, updateTaskBody: updateTaskInterface) {
        const index = this.todoList.findIndex(obj => obj.id === taskId);
        if (index == -1) {
            return {
                status: "Failed",
                message: `The task with task id :${taskId} is not found.`
            }
        }
        this.todoList[index].priorityLevel = updateTaskBody.priorityLevel;
        this.todoList[index].status = updateTaskBody.status;
        return {
            status: "Success",
            message: `The task with task id :${taskId} is updated.`
        }
    }
}
