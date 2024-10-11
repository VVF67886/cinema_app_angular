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
  filmsToShowLW: Array<IAnswer> = [];
  filmsToShowTW: Array<IAnswer> = [];
  filmsToShow: Array<IAnswer> = [];
  todayDate = new Date();
  endThisWeek = new Date(this.todayDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  endLastWeek = new Date(this.todayDate.getTime() - 7 * 24 * 60 * 60 * 1000);
  initLastWeek = new Date(this.todayDate.getTime() - 14 * 24 * 60 * 60 * 1000);

  constructor(private storeCentraleFilm: Store<FilmState>){
    this.storeCentraleFilm.pipe(select(selectFilm)).subscribe((filmsToStore) => {
      this.films = filmsToStore;
      console.log(new Date(this.films[4]['dataUscita']));
      console.log(this.endLastWeek)
      this.filmsToShowLW = this.films.filter(film => film['dataUscita'] != null && (new Date(film['dataUscita']) >= this.initLastWeek && film['dataUscita'] < this.endLastWeek));
      console.log(this.films)
      console.log(this.filmsToShowLW)
    });
  }


  scegliFilm(periodo: string): void{
    console.log(this.films)
    switch(periodo){
      case "scorsa settimana":
        this.filmsToShow = this.filmsToShowLW;
        break;
      case "questa settimana":
        this.filmsToShow = this.filmsToShowTW;
        break;
      default:
        break;

    }
  }
}
