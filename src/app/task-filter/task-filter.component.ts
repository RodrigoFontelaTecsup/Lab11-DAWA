import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  @Output() filterChanged = new EventEmitter<string>();
  selectedFilter: string = 'Todas';
  filterOptions: string[] = ['Todas', 'Completadas', 'No Completadas'];

  changeFilter(filter: string) {
    this.selectedFilter = filter;
    this.filterChanged.emit(filter);
  }
}
