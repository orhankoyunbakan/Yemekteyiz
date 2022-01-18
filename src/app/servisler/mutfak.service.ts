import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mutfak } from '../mutfak/mutfak';

@Injectable()
export class MutfakService {

  //path="http://localhost:3000/mutfaklar"
  path=environment.API_URL
  constructor(private http:HttpClient) { }

  mutfaklariCek():Observable<Mutfak[]>{
    
   return this.http.get<Mutfak[]>(this.path+"mutfaklars").pipe(tap(data=>console.log(JSON.stringify(data))),catchError(this.handleError));
  }
  handleError(err:HttpErrorResponse){
    let errorMessage=""
    if(err.error instanceof ErrorEvent){
      errorMessage="Bir hata oluştu"+err.error.message
    }
    else{
      errorMessage="Sistemsel bir hata oluştur"
    }
    return throwError(errorMessage)
    
  }
}
