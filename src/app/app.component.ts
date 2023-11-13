import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { name: string, completed: boolean }[] = [];
  filteredTasks: { name: string, completed: boolean }[] = [];
  selectedFilter: string = 'Todas';

  addTask(taskName: string) {
    this.tasks.push({ name: taskName, completed: false });
    this.applyFilter(this.selectedFilter);
  }

  applyFilter(filter: string) {
    this.selectedFilter = filter;
    this.filteredTasks = this.tasks.filter(task => {
      if (filter === 'Completadas') {
        return task.completed;
      } else if (filter === 'No Completadas') {
        return !task.completed;
      }
      return true; // 'Todas'
    });
  }
}
