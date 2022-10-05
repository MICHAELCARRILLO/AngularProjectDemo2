import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,  HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Knowledge } from '../model/knowledge';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService {

  baseUrl ='http://localhost:3000/api/v1/knowledges';

  constructor(private http: HttpClient) { }

  //http options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  //htp handle error
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message}`);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(
      'something happened with request, please try again later'
    );
  }

  //mothods http

  getAll(): Observable<Knowledge>{
    return this.http.get<Knowledge>(this.baseUrl, this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }

  addKnowledge(knowledge: Knowledge): Observable<Knowledge>{
    return this.http.post<Knowledge>(this.baseUrl, JSON.stringify(knowledge), this.httpOptions).pipe(retry(2), catchError(this.handleError));
  }


}
