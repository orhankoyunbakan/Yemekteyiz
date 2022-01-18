import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/servisler/alertify.service';
import { HesapService } from 'src/app/servisler/hesap.service';
import { Kullanici } from '../kullanici';

@Component({
  selector: 'app-kayit-ol',
  templateUrl: './kayit-ol.component.html',
  styleUrls: ['./kayit-ol.component.css']
})
export class KayitOlComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private hesapServis:HesapService,
    private alertiyServis:AlertifyService,
    private router:Router
    ) { }
    kullaniciEkleForm!:FormGroup
    kullanici:Kullanici=new Kullanici()

    kullaniciEkleFormOlustur(){
      this.kullaniciEkleForm=this.formBuilder.group(
        {
          password:["",Validators.required],
          email:["",Validators.required],
          username:["",Validators.required]

        }
      )
    }

  ngOnInit(): void {
    this.kullaniciEkleFormOlustur()
  }

  kullaniciEkle(){
    if(this.kullaniciEkleForm.valid){
      this.kullanici=this.kullaniciEkleForm.value as Kullanici
      this.hesapServis.kullaniciEkle(this.kullanici).subscribe(data=>{
        this.alertiyServis.success("başarıyla eklendi.")
        localStorage.setItem("Token",data.jwt)
        this.router.navigate(["anasayfa"])
      },err=>{
        this.alertiyServis.warning("Benzer kullanıcı adı ve eposta. Lütfen eposta ve Kullanıcı adınızı değiştirin")
      }
      )
    }
    else{
      this.alertiyServis.warning("Lütfen verileri tam giriniz.")
    }
  }

}
