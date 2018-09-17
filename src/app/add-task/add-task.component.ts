import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {TasksService} from '../services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  newTask: string;

  constructor(private tasksTaskservice: TasksService) {
  }

  ngOnInit() {
  }

  add() {
    this.tasksTaskservice.add(this.newTask);
    this.newTask = '';
  }

}
