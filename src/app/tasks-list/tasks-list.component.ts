import { Component, OnInit } from '@angular/core';
import {TasksService} from '../services/tasks.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {

  tasksList: Array<Task> = [];


  remove(task: Task){
    this.tasksService.remove(task);
  }

  done(task: Task){
    task.end = new Date().toLocaleString();
    this.tasksService.done(task);
  }

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks.slice();
    });
  }

  ngOnInit() {
  }

  getColor(): string{
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}
