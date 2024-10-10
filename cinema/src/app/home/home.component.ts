import { Component, inject, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CinemaService } from '../cinema.service';
import { NgFor} from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,MatCardModule, MatToolbarModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent implements OnInit {
  cinemaService: CinemaService = inject(CinemaService);
  
  public film: Array<any> = [];

  ngOnInit(): void {
   
     this.cinemaService.getFilmPerGenere('drammatico').subscribe((d) => {
      console.log(d);
      this.film = CinemaService.rowsToObjects(d);
      
    }); 
    /* this.cinemaService.getFilmDramm().subscribe((d) => {
      console.log(d);
      this.film = CinemaService.rowsToObjects(d);
      console.log(this.film);
    }); */
  }
}
