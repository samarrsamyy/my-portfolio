import { Component } from '@angular/core';
import { SpaceComponent } from "../space/space.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SpaceComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
