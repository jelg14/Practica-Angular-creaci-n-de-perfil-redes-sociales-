import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ContenidoComponent} from './contenido/contenido.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContenidoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica';
}
