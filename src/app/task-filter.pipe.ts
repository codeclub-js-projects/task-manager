import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './organizer.service';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(tasks: Task[], search: string): Task[] {
    if (!search.trim()) {
      return tasks;
    }

    return tasks.filter(task => {
      return (task.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    });
  }

}
