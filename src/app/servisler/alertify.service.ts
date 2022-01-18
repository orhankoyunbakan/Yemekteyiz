import { Injectable } from '@angular/core';

declare let alertify:any
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  success(mesaj:string){
    alertify.success(mesaj);
  }
  warning(mesaj:string){
    alertify.warning(mesaj);
  }
  error(mesaj:string){
    alertify.error(mesaj);
  }
}
