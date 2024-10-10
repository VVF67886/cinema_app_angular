import { Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CinemaService } from './cinema.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  
  
  
  title = 'cinema';
}
