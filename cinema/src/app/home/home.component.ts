import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ServizioDatiService } from '../servizi/servizio-dati.service';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule,MatToolbarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent {
  constructor(private dati:ServizioDatiService){}
  prova() {
    this.dati.prova().subscribe(
      dati =>
      {console.log(dati)}
    )
  }
}
