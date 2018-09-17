import { Component, OnInit } from '@angular/core';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'app-tasks-done-list',
  templateUrl: './tasks-done-list.component.html',
  styleUrls: ['./tasks-done-list.component.css']
})
export class TasksDoneListComponent implements OnInit {

  tasksDone: Array<string> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksDoneObs().subscribe( (tasks: Array<string>) => {
      this.tasksDone = tasks;
    });
  }

  ngOnInit() {
  }

}
