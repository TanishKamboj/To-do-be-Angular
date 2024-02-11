/* eslint-disable prettier/prettier */
import { UUID } from "crypto";
import { TaskTags, TodoStatus } from "./dto/create-todo.dto";

export interface ToDoInterface {
    id: UUID,
    title: string;
    description: string;
    priorityLevel: number;
    status: TodoStatus;
    createdAt: Date;
    dueDate: Date;
    Tags: TaskTags[]
}

export interface updateTaskInterface {
    priorityLevel: number;
    status: TodoStatus;
}
