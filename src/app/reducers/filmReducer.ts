import { IAnswer } from "../ianswer";
import { IFilm } from "../IFilm";

import { createSelector } from "@ngrx/store";

export interface FilmState {
    film: Array<IAnswer>
}

const arrayInizialeFilm: FilmState = {film: []};

export function filmReducer (
    filmState: FilmState = arrayInizialeFilm,
    azione: any
){
    switch(azione.type){
        case "POPOLA":
            console.log(azione.filmArray)
            return {film: azione.filmArray}

        default:
            return filmState;
    }
}

const selectFilmState = (state:any) => state.filmState;
export const selectFilm = createSelector(selectFilmState, (state) => state.film);