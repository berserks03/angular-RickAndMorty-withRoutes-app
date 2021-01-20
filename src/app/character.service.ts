import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

export interface Character {
  id: number;
  name: string;
  image: string;
  type: string;

}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  charactersUrl = 'https://rickandmortyapi.com/api/character/?page=19';
  singleCharacterUrl = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.charactersUrl).pipe(pluck('results'));
  }

  getSingleCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(this.singleCharacterUrl + id);
  }
}
