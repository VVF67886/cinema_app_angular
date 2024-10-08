import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalendarioUsciteComponent } from './calendario-uscite/calendario-uscite.component';
import { NewsComponent } from './news/news.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'calendario-uscite',
    component: CalendarioUsciteComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
  },
];
