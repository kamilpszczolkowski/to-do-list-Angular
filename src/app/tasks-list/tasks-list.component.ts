import { Component, OnInit } from '@angular/core';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {

  tasksList = [];


  remove(task){
    this.tasksService.remove(task);
  }

  done(task){
    this.tasksService.done(task);
  }

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<string>) => {
      this.tasksList = tasks;
    });
  }

  ngOnInit() {
  }

  getColor(): string{
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}
