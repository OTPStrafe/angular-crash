import { Component, Inject, OnInit } from '@angular/core';
import { Task } from '../../interfaces/Task.interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css', '../../app.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}
  
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.taskService.getTasks().subscribe((task) => {
      this.tasks = task;
    })
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    })
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.createTask(task).subscribe(() => {
      this.tasks.push(task);
    });
  }
}
