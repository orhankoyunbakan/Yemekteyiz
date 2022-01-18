import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Kullanici } from '../giris/kullanici';
import { Login } from '../giris/login';

@Injectable({
  providedIn: 'root'
})
export class HesapService {

  constructor(private http:HttpClient) { }
  path=environment.API_URL
  
  checkToken():Observable<any>{
    const httpOptions={
      headers:new HttpHeaders({
        'Authorization':'Bearer'+localStorage.getItem("Token")
      })
    }
    return this.http.get<any>(this.path+"users/me",httpOptions);
  }

  kullaniciEkle(kullanici:Kullanici):Observable<any>{
    return this.http.post<Kullanici>(this.path+"auth/local/register",kullanici).pipe(
      tap(data=>console.log(JSON.stringify(data))),catchError(this.handleError)
    )
  }


  girisYap(login:Login):Observable<any>{
    return this.http.post<Login>(this.path+"auth/local",login).pipe(
      tap(data=>console.log(JSON.stringify(data))),catchError(this.handleError)
    )
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

  girisYapildiMi(){
    if(localStorage.getItem("Token")){
      return true
    }
    else {
      return false
    } 
  }

  cikisYap(){
    localStorage.removeItem("Token")
  }

}
