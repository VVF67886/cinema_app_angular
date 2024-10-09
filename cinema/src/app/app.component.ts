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
export class AppComponent implements OnInit {
  
  cinemaService: CinemaService = inject(CinemaService);
  public generi:Array<any>=[];
  public film:Array<any>=[];
  ngOnInit(): void {
    this.cinemaService.getGeneri().subscribe(d=>{
      this.generi=CinemaService.rowsToObjects(d);
    });
    this.cinemaService.getFilmPerGenere("Drammatico").subscribe(d=>{
      this.film=CinemaService.rowsToObjects(d);
    });
  }
  title = 'cinema';
}
