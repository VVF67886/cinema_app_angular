import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAnswer } from '../ianswer';
import { FilmState, selectFilm } from '../reducers/filmReducer';


@Component({
  selector: 'app-calendario-uscite',
  templateUrl: './calendario-uscite.component.html',
  styleUrl: './calendario-uscite.component.css'
})
export class CalendarioUsciteComponent {
  films: Array<IAnswer> = [];
  filmsToShow: Array<IAnswer> = [];
  todayDate = new Date();
  endThisWeek = new Date(this.todayDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  endLastWeek = new Date(this.todayDate.getTime() - 7 * 24 * 60 * 60 * 1000);
  initLastWeek = new Date(this.todayDate.getTime() - 14 * 24 * 60 * 60 * 1000);

  constructor(private storeCentraleFilm: Store<FilmState>){
    this.storeCentraleFilm.pipe(select(selectFilm)).subscribe((filmsToStore) => {
      this.films = filmsToStore;
    });
  }


  scegliFilm(periodo: string): void{
    switch(periodo){
      case "scorsa settimana":
        this.filmsToShow = this.films.filter(film => 
          film['dataUscita'] != null && 
          (new Date(film['dataUscita']) >= this.initLastWeek && 
          new Date(film['dataUscita']) < this.endLastWeek));
        console.log(this.filmsToShow)
        break;
      case "questa settimana":
        this.filmsToShow = this.films.filter(film => 
          film['dataUscita'] != null && 
          (new Date(film['dataUscita']) >= this.todayDate && 
          new Date(film['dataUscita']) < this.endThisWeek));
        console.log(this.filmsToShow)
        break;
      default:
        break;

    }
  }
}
