import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddNewTask: EventEmitter<Task> = new EventEmitter();
  newTask: string;
  day: string;
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;
  constructor(private ui: UiService) {
    this.subscription = this.ui.onToggle().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.newTask) {
      alert('Please add a task');
      return;
    }
    const newTaskObj:Task = {
      text: this.newTask,
      day: this.day,
      reminder: this.reminder
    }
    this.onAddNewTask.emit(newTaskObj);

    this.newTask = "";
    this.day = "";
    this.reminder = false
  }
}
