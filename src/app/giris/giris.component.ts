import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../servisler/alertify.service';
import { HesapService } from '../servisler/hesap.service';
import { Login } from './login';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.css']
})
export class GirisComponent implements OnInit {

  loginVerisi:Login=new Login()
  constructor(private hesapServis:HesapService,private router:Router,private alertifyServis:AlertifyService) { }

  ngOnInit(): void {
  }
  giris(){
    this.hesapServis.girisYap(this.loginVerisi).subscribe(data=>{
      this.alertifyServis.success("başarıyla giriş gerçekleşti")
      localStorage.setItem("Token",data.jwt)
      this.router.navigate(["anasayfa"])
    },
    err=>{
      this.alertifyServis.error("Giris Yapılamadı")
    })
  }

}
