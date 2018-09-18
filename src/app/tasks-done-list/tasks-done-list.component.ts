import {Component, OnInit} from '@angular/core';
import {TasksService} from '../services/tasks.service';
import {Task} from '../model/task';

@Component({
  selector: 'app-tasks-done-list',
  templateUrl: './tasks-done-list.component.html',
  styleUrls: ['./tasks-done-list.component.css']
})
export class TasksDoneListComponent implements OnInit {

  tasksDone: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksDone = tasks.filter(task => task.isDone === true);
    });
  }

  ngOnInit() {
  }

}
