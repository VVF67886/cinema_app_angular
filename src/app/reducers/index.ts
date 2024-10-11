//IN QUESTO FILE ACCORPIAMO TUTTI I REDUCERS INSERITI NELLA CARTELLA reducers


//importiamo i reducer da mappare
import { FilmState, filmReducer } from "./filmReducer";



//importiamo il modulo che crea la "mappatura" degli state da mettere nello store
//per mappatura si intende il nome del reducer e lo state che può gestire
import { ActionReducerMap } from "@ngrx/store";



//accorpo gli state in uno state CENTRALE
interface AppState {
    filmState: FilmState
}


//accorpiamo tutti i reducer in un unico reducer centrale
export const reducers: ActionReducerMap<AppState> = {
    filmState: filmReducer
}