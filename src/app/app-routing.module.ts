import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalendarioUsciteComponent } from './calendario-uscite/calendario-uscite.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { NewsComponent } from './news/news.component';
import { TrameComponent } from './trame/trame.component';
import { DescrizioneTramaComponent } from './descrizione-trama/descrizione-trama.component';
import { DescrizioneNewsComponent } from './descrizione-news/descrizione-news.component';

const routes: Routes = [
  { path: 'home', component: HomeBodyComponent},
  { path: 'trame', component: TrameComponent, children: [
    { path: 'descrizione', component: DescrizioneTramaComponent}
  ]},
  { path: 'calendario-uscite', component: CalendarioUsciteComponent},
  { path: 'news', component: NewsComponent, children: [
    { path: 'descrizione', component: DescrizioneNewsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
