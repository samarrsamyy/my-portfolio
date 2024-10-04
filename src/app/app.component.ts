import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar/navbar.component";
import { AboutComponent } from "./components/aboutme/about/about.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { TechnologiesComponent } from "./components/technologies/technologies.component";
import { LinksComponent } from "./components/links/links.component";
import { SpaceComponent } from "./components/space/space.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AboutComponent, ProjectsComponent, TechnologiesComponent, LinksComponent, SpaceComponent, FooterComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
