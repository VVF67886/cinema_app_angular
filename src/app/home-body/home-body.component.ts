import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { Store } from '@ngrx/store';
import { FilmState } from '../reducers/filmReducer';
import { IAnswer } from '../ianswer';


@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrl: './home-body.component.css'
})
export class HomeBodyComponent implements OnInit{
  homeFilms: Array<IAnswer> = [];


  constructor (
    private cinemaService: CinemaService, 
    private storeFilm: Store<FilmState>
  ){}


  ngOnInit(): void {
    this.cinemaService.getFilmPerGenere('').subscribe(films => {
      this.homeFilms = CinemaService.rowsToObjects(films);

      this.homeFilms.forEach(homeFilm => {
        let tramaPathImg = "";
        if(homeFilm['trama'] != null) tramaPathImg = "../../assets/images_cinemapp/cinema_trame/trama_" + homeFilm['immagine'].split("_", ).pop();
        else tramaPathImg = "";
        homeFilm['tramaImmagine'] = tramaPathImg;
      })
  
      this.storeFilm.dispatch({type:"POPOLA", filmArray: this.homeFilms});

    })

    
    /*
    if(film[3] != null) tramaPathImg = "../../assets/images_cinemapp/cinema_trame/trama_" + film[3].split("_", ).pop();
          else tramaPathImg = "";
          //console.log(tramaPathImg);
          this.films.push({title: film[1], img: film[3], text: film[2], genre: film[4], anno: film[6], dataUscita: new Date(film[5]), regia: film[8], tramaPathImage: tramaPathImg}); 

        this.storeFilm.dispatch({type:"POPOLA", filmArray: this.films});
        */
  }
  
}
