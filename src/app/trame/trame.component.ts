import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IFilm } from '../IFilm';
import { FilmState, selectFilm } from '../reducers/filmReducer';
import { IAnswer } from '../ianswer';


@Component({
  selector: 'app-trame',
  templateUrl: './trame.component.html',
  styleUrl: './trame.component.css'
})
export class TrameComponent {
  films: Array<IAnswer> = [];
  isIntoTramaDescription: boolean = false;

  constructor(private storeCentraleFilm: Store<FilmState>){
    this.storeCentraleFilm.pipe(select(selectFilm)).subscribe((filmsToStore) => {
      this.films = filmsToStore
    });
  }

  updateStatus(){
    this.isIntoTramaDescription = !this.isIntoTramaDescription;
  }
}
