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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PickerComponent } from './picker/picker.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

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
    DescrizioneNewsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    StoreModule.forRoot(reducers),
    MatFormFieldModule,
    PickerComponent
  ],
  providers: [
    CinemaService,
    provideHttpClient(),
    provideNativeDateAdapter(),
    provideAnimations(),
    provideAnimationsAsync() 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
