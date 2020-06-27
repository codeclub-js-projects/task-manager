import { Component, OnInit } from '@angular/core';
import { OrganizerService } from '../organizer.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.css']
})
export class OrganizerComponent implements OnInit {

  loading = true;
  search = '';

  constructor(public organizerService: OrganizerService) { }

  ngOnInit(): void {
    this.organizerService.fetchTasks()
      .pipe(delay(500))
      .subscribe(() => { this.loading = false; });
  }

  onChange(id: number): void {
    this.organizerService.toggle(id);
  }

  delTask(id: number): void {
    this.organizerService.remove(id);
  }

}
