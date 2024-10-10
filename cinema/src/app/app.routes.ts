import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalendarioUsciteComponent } from './calendario-uscite/calendario-uscite.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'calendario-uscite',
        component: CalendarioUsciteComponent,
      },
    ],
  },
  {
    path: 'calendario-uscite',
    component: CalendarioUsciteComponent,
  },
];
