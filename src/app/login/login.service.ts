import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, mapTo, Observable, of, tap} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

const URL = 'http://localhost:8080/api/auth/';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';

  constructor(private http: HttpClient) { }

  login(usuario: {email: string, senha: string}): Observable<any> {
    return this.http.post(URL + 'authenticate', usuario)
      .pipe(
        tap(tokens => this.doLoginUser(tokens)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        })
      );
  }

  doLoginUser(token: any){
    console.log(token);
  }
}
