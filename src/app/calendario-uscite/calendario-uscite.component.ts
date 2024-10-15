import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAnswer } from '../ianswer';
import { filmReducer, FilmState, selectFilm } from '../reducers/filmReducer';

@Component({
  selector: 'app-calendario-uscite',
  templateUrl: './calendario-uscite.component.html',
  styleUrl: './calendario-uscite.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarioUsciteComponent {
  films: Array<IAnswer> = [];
  filmsToShow: Array<IAnswer> = [];
  todayDate = new Date();
  isDataPickerSelected: boolean = false;
  DataPickerInit: any;
  DataPickerEnd: any;

  constructor(private storeCentraleFilm: Store<FilmState>) {
    this.storeCentraleFilm.pipe(select(selectFilm)).subscribe((filmsToStore) => {
      this.films = filmsToStore;
    });
  }


  scegliFilm(periodo: string): void {
    let endThisWeek = new Date(this.todayDate.getTime() + 7 * 24 * 60 * 60 * 1000);
    let endLastWeek = new Date(this.todayDate.getTime() - 7 * 24 * 60 * 60 * 1000);
    let initLastWeek = new Date(this.todayDate.getTime() - 14 * 24 * 60 * 60 * 1000);

    switch (periodo) {
      case "scorsa settimana":
        this.isDataPickerSelected = false;
        this.filmsToShow = this.films.filter(film =>
          film['dataUscita'] != null &&
          (new Date(film['dataUscita']) >= initLastWeek &&
            new Date(film['dataUscita']) < endLastWeek));
        console.log(this.filmsToShow)
        break;
      case "questa settimana":
        this.isDataPickerSelected = false;
        this.filmsToShow = this.films.filter(film =>
          film['dataUscita'] != null &&
          (new Date(film['dataUscita']) >= this.todayDate &&
            new Date(film['dataUscita']) < endThisWeek));
        console.log(this.filmsToShow)
        break;
      case "periodo":
        this.filmsToShow = this.films.filter(film =>
          film['dataUscita'] != null &&
          (new Date(film['dataUscita']) >= this.DataPickerInit &&
            new Date(film['dataUscita']) < this.DataPickerEnd));
        console.log(this.filmsToShow)
        this.isDataPickerSelected = false;
        break;
      default:
        this.isDataPickerSelected = false;
        break;

    }
  }

  getWeekAgoMonday(day: string): string {
    const today = new Date();
    const todayDay = today.getDay();
    const dayIndex = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].indexOf(day);

    let lastGivenDay = new Date();
    lastGivenDay.setDate(today.getDate() - (todayDay - dayIndex) % 7);

    if (todayDay < dayIndex || todayDay === dayIndex) {
      lastGivenDay.setDate(lastGivenDay.getDate() - 7);
    }

    return lastGivenDay.toISOString().slice(0, 10);
  }

  dataPicker() {
    this.isDataPickerSelected = !this.isDataPickerSelected;
  }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    this.DataPickerInit = new Date(dateRangeStart.value.toString());
    this.DataPickerEnd = new Date(dateRangeEnd.value.toString());
    console.log(this.DataPickerInit)
    console.log(this.films)
    this.scegliFilm("periodo");
  }

}
