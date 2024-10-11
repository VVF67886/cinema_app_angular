import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { Store } from '@ngrx/store';
import { IAnswer } from '../ianswer';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit{
  news: Array<IAnswer> = [];
  isIntoTramaDescription: boolean = false;

  constructor (
    private cinemaService: CinemaService
  ){}

  ngOnInit(): void {
    this.cinemaService.getNews().subscribe(news => {
      this.news = CinemaService.rowsToObjects(news);
      this.news.forEach((n, index) => {
        n['immagine'] = "../../assets/images_cinemapp/cinema_news/news_" + (index+1)+".jpg";
      })

      console.log(this.news);

    })
  }

  updateStatus(){
    this.isIntoTramaDescription = !this.isIntoTramaDescription;
  }
}
