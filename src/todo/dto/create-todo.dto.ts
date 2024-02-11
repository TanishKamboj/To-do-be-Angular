/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsNotEmpty, Min, Max, IsEnum } from 'class-validator';

export enum TodoStatus {
    Pending = 'Pending',
    InProgress = 'In Progress',
    Completed = 'Completed',
}
export enum TaskTags {
    Programming = "Programming",
    HomeTask = "Home Task",
    OfficeWork = "Office Work",
    Hobbies = "Hobbies"
}
export class CreateTodoDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    description: string;

    @IsInt()
    @Min(1)
    @Max(3)
    priorityLevel: number;

    @IsEnum(TodoStatus)
    status: TodoStatus;

    @IsString()
    @IsNotEmpty()
    dueDate: string;

    @IsEnum(TaskTags, { each: true })
    Tags: TaskTags[];
}