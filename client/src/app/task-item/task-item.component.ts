import { Component, Input } from '@angular/core';
import { Task } from '../models/Task';
import { Router } from "@angular/router"
import { ApiService } from '../services/api.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() data: Task;
  isDone = false
  constructor(
    public api: ApiService,
    private router: Router,
    private header: HeaderService
  ) { }
  updateStatus() {
    const task: Task = {
      uid: this.data.uid,
      title: this.data.title,
      description: this.data.description,
      isDone: !this.data.isDone
    }
    this.api.updateTask(task)
  }
  goEditTheTask() {
    this.header.title = 'EDIT TASK'
    this.router.navigate([this.data.uid])
    localStorage.setItem('task', JSON.stringify(this.data))
  }
}
