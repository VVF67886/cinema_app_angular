import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAnswer } from './ianswer';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(public http: HttpClient) { }

  private apiUrl="http://www.ve.dipvvf.it/corsong/resources/"
  getGeneri(){
    
    const params = new HttpParams();
    return this.http.get<IAnswer>(this.apiUrl + "categorie", {params});
  }
  getNews(){
    
    const params = new HttpParams();
    return this.http.get<IAnswer>(this.apiUrl + "news", {params});
  }
  getFilmPerGenere(genere:string){
    
    let params = new HttpParams();
    params=params.set("categoria",genere);
    return this.http.get<IAnswer>(this.apiUrl + "film", {params});
  }

  getFilmDramm() {
    return this.http.get<IAnswer>("http://www.ve.dipvvf.it/corsong/resources/film?categoria=drammatico");
  }
  
  public static rowsToObjects(data: IAnswer) {
    let retArray = [];
    let ret: any;
    const rows = data.rows;
    const ind: any = data.columnIndexes;
    if (rows) {
      for (let k = 0; k < rows.length; k++) {
        const obj: any = {};
        const row = rows[k];
        // for (let key in ind)
        for (const field of Object.keys(ind)) {
          obj[field] = row[ind[field]];
        }
        retArray.push(obj);
      }
    }
    return retArray;
  }

}
