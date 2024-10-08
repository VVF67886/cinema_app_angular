import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServizioDatiService {
  constructor(private http: HttpClient) {}
  url: string = 'http://www.ve.dipvvf.it/corsong/resources/test';
  prova() {
    return this.http.get(this.url)
  }
}
