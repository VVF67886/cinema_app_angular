import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CalendarioUsciteComponent } from './calendario-uscite/calendario-uscite.component';
import { CinemaService } from './cinema.service';
import { provideHttpClient } from '@angular/common/http';
import { HomeBodyComponent } from './home-body/home-body.component';
import { NewsComponent } from './news/news.component';
import { TrameComponent } from './trame/trame.component';
import { DescrizioneTramaComponent } from './descrizione-trama/descrizione-trama.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { DescrizioneNewsComponent } from './descrizione-news/descrizione-news.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CalendarioUsciteComponent,
    HomeBodyComponent,
    NewsComponent,
    TrameComponent,
    DescrizioneTramaComponent,
    DescrizioneNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    CinemaService,
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
