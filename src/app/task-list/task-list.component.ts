import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: { name: string, completed: boolean }[] = [];
  @Input() filter: string = 'Todas';
  filteredTasks: { name: string, completed: boolean }[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tasks'] || changes['filter']) {
      this.applyFilter();
    }
  }

  applyFilter() {
    switch (this.filter) {
      case 'Completadas':
        this.filteredTasks = this.tasks.filter(task => task.completed);
        break;
      case 'No Completadas':
        this.filteredTasks = this.tasks.filter(task => !task.completed);
        break;
      default:
        this.filteredTasks = this.tasks;
    }
  }

  toggleTaskStatus(task: { name: string, completed: boolean }) {
    task.completed = !task.completed;
  }

  updateTaskStatus(task: { name: string, completed: boolean }) {
    task.completed = !task.completed;
  }
}
