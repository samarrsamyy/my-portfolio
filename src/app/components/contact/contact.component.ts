import { Component } from '@angular/core';
import { SpaceComponent } from "../space/space.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SpaceComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
