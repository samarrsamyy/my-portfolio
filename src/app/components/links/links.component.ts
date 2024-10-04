import { Component } from '@angular/core';
import { SpaceComponent } from "../space/space.component";

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [SpaceComponent],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {

}
