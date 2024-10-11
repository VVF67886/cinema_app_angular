import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descrizione-news',
  templateUrl: './descrizione-news.component.html',
  styleUrl: './descrizione-news.component.css'
})
export class DescrizioneNewsComponent {
  trama: Array<string> = [];
  titolo: string = "";
  sottotitolo: string = "";

  constructor(private leggiNews: ActivatedRoute){}

  ngOnInit(): void {    

    this.leggiNews.queryParams.subscribe(news => {
      this.titolo = news['titolo'];
      this.trama = news['trama'].split("•");
      this.sottotitolo = news['sottotitolo'];
    })
  }
}
