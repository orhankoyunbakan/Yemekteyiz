import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Kategori } from 'src/app/kategori/kategori';
import { Mutfak } from 'src/app/mutfak/mutfak';
import { AlertifyService } from 'src/app/servisler/alertify.service';
import { KategoriService } from 'src/app/servisler/kategori.service';
import { MutfakService } from 'src/app/servisler/mutfak.service';
import { TarifService } from 'src/app/servisler/tarif.service';
import { Icerik } from '../icerik';
import { Tarif } from '../tarif';

@Component({
  selector: 'app-tarif-ekle',
  templateUrl: './tarif-ekle.component.html',
  styleUrls: ['./tarif-ekle.component.css'],
  providers:[TarifService,KategoriService,MutfakService]
})
export class TarifEkleComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private kategoriServis:KategoriService,private tarifServis:TarifService,private alertifyServis:AlertifyService,private mutfakServis:MutfakService) { }

  tarifEkleForm!:FormGroup;
  icerikListeForm!:FormGroup;
  tarif:Tarif=new Tarif();
  icerik:Icerik =new Icerik();
  icerikListIndex = new FormControl('');
  IcerikListesi :Icerik[] = [
  ]
  Kategoriler : Kategori[] = [
  ]
  Mutfaklar : Mutfak[] = [
  ]
  
  ngOnInit(): void {

    this.tarifEklemeFormuOlustur();
    this.kategoriServis.kategorileriCek().subscribe(data => {
      this.Kategoriler = data 
    }); 
    this.mutfakServis.mutfaklariCek().subscribe(data => {
      this.Mutfaklar = data 
    }); 
  }

  tarifEklemeFormuOlustur(){
    this.tarifEkleForm=this.formBuilder.group({
      Adi:["",Validators.required],
      Aciklama:["",Validators.required],
      ResimUrl:["",Validators.required],
      KategoriId:["",Validators.required],
      MutfakId:["",Validators.required],
    })
    this.icerikListeForm=this.formBuilder.group({
      Miktar:["",Validators.required],
      Birim:["",Validators.required],
      Malzeme:["",Validators.required],
    })
  }
  ekleIcerik(){
    if(this.icerikListeForm.valid){
    this.icerik=this.icerikListeForm.value as Icerik;
    this.IcerikListesi.push(this.icerik);
    this.icerik=new Icerik();
    }
    else{
      this.alertifyServis.warning("Lütfen içerikte Boş yer bırakmayın");
    }
  }
  
 async ekleTarif(){
    if(this.tarifEkleForm.valid){
      this.tarif=this.tarifEkleForm.value as Tarif;
      if(this.IcerikListesi.length>0){
        this.tarif.IcerikListesi=this.IcerikListesi
        await this.tarifServis.tarifEkle(this.tarif).subscribe(data=>{this.alertifyServis.success(data.Adi+" Eklendi")})
        this.router.navigate(["anasayfa"])
      }
      else{
        this.alertifyServis.warning("Lütfen İçerik ekleyin");
      }
    }
    else{
      this.alertifyServis.warning("Lütfen Boş yer bırakmayın");
    }
  }

  icerikSil(){
    if(this.IcerikListesi.length>0){
      console.log(this.icerikListIndex.value)
      this.IcerikListesi.splice(this.icerikListIndex.value,1)
    }

  }

}
