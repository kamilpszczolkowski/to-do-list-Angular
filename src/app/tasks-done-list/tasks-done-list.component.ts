import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tasks-done-list',
  templateUrl: './tasks-done-list.component.html',
  styleUrls: ['./tasks-done-list.component.css']
})
export class TasksDoneListComponent implements OnInit {
  @Input() tasksDone = [];

  constructor() { }

  ngOnInit() {
  }

}
