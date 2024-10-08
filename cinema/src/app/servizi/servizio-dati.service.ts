import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ServizioDatiService {
  constructor(private http: HttpClient) {}
  url: string = 'http://www.ve.dipvvf.it/corsong/resources/test';
  /* httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Origin': '*',
    }),
  };
 */
  prova() {
    return this.http.get(this.url);
  }
}
