import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAnswer } from '../ianswer';
import { CinemaService } from '../cinema.service';


@Component({
  selector: 'app-descrizione-trama',
  templateUrl: './descrizione-trama.component.html',
  styleUrl: './descrizione-trama.component.css'
})
export class DescrizioneTramaComponent implements OnInit{
  trama: Array<string> = [];
  titolo: string = "";
  sottotitolo: string = "";

  constructor(private leggiFilm: ActivatedRoute){}

  ngOnInit(): void {    

    this.leggiFilm.queryParams.subscribe(film => {
      this.titolo = film['titolo'];
      this.trama = film['trama'].split("•");
      this.sottotitolo = film['sottotitolo'];
    })
  }
    
}

