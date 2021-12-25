import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Personatga } from 'src/app/models/personatge.interface';
@Injectable({
  providedIn: 'root',
})
export class PersonatgesService {
  constructor(private http: HttpClient) {}
  getAllImages(): Observable<Personatga[]> {
    return this.http
      .get<Personatga[]>('https://api.disneyapi.dev/characters/')
      .pipe(
        map((data: any) => data.data),
        catchError((error) => {
          return throwError('Error');
        })
      );
  }
  getImgeById(id: string): Observable<Personatga> {
    return this.http.get<Personatga>(
      'https://api.disneyapi.dev/characters/' + id
    );
  }
}
