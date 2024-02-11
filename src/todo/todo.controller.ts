/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoService } from './todo.service';
import { UUID } from 'crypto';
import { updateTaskInterface } from './todo.interfrace';

@Controller('api/todo')
export class TodoController {

    constructor(private todoService: TodoService) {

    }
    @Get()
    toDoHome() {
        return "The Home Setup is completed!"
    }

    @Post()
    addTodoTask(@Body() ceateTodoDto: CreateTodoDto) {
        return this.todoService.addTodoTask(ceateTodoDto);
    }

    @Get('/tasks')
    getTask() {
        return this.todoService.getAllTasks();
    }

    @Get('/tasks/:id')
    getTasksById(@Param('id') id: UUID) {
        return this.todoService.getTaskById(id);
    }

    @Delete('/tasks/:id')
    deleteTask(@Param('id') id: UUID) {
        return this.todoService.deleteTask(id);
    }

    @Put('/tasks/:id')
    updateTask(@Param('id') id: UUID, @Body() updateTaskBody: updateTaskInterface) {
        return this.todoService.updateTask(id, updateTaskBody);
    }
}
