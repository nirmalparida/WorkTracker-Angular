import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private service: TaskService) {}

  ngOnInit() {
    this.service.getTasks().subscribe(tasks => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.service.deleteTasks(task).subscribe(() => (
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    ));
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.service.updateTaskReminder(task).subscribe();
  }

  addNewTask(task: Task) {
    this.service.addTask(task).subscribe(task => this.tasks.push(task));
  }
}
