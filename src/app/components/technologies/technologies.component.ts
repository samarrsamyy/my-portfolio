import { Component } from '@angular/core';
import { SpaceComponent } from "../space/space.component";

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [SpaceComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {

}
