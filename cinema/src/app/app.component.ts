import { Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CinemaService } from './cinema.service';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule,MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  
  
  
  title = 'cinema';
}
