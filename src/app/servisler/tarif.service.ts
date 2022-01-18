import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Tarif } from '../tarif/tarif';


@Injectable()
export class TarifService {
  path="http://localhost:3000/tarifler"
  constructor(private http:HttpClient) { }

  tarifleriCek(kategoriId:number):Observable<Tarif[]>{
    let yeniPath=this.path;
    if(kategoriId){
     yeniPath+="?KategoriId="+kategoriId;
    }
   return this.http.get<Tarif[]>(yeniPath).pipe(tap(data=>console.log(JSON.stringify(data))),catchError(this.handleError));
  }
  tarifleriMutfakCek(mutfakId:number):Observable<Tarif[]>{
    let yeniPath=this.path;
    if(mutfakId){
     yeniPath+="?MutfakId="+mutfakId;
    }
   return this.http.get<Tarif[]>(yeniPath).pipe(tap(data=>console.log(JSON.stringify(data))),catchError(this.handleError));
  }
  tarifEkle(tarif:Tarif):Observable<Tarif>{
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':"application/json",
        "Authorization":"Token"
      })}
      return this.http.post<Tarif>(this.path,tarif).pipe(tap(data=>console.log(JSON.stringify(data))),catchError(this.handleError));
    }
    tekTarifCek(tarifId:number):Observable<Tarif>{
      let yeniPath=this.path;
      if(tarifId){
       yeniPath+="/"+tarifId;
      }
     return this.http.get<Tarif>(yeniPath).pipe(tap(data=>console.log(JSON.stringify(data))),catchError(this.handleError));
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
