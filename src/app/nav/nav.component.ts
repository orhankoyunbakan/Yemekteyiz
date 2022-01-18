import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kategori } from '../kategori/kategori';
import { Mutfak } from '../mutfak/mutfak';
import { HesapService } from '../servisler/hesap.service';
import { KategoriService } from '../servisler/kategori.service';
import { MutfakService } from '../servisler/mutfak.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css','./public/css/ionicon.min.css','./public/css/style.min.css','./public/css/reset.min.css'],
  providers:[MutfakService,KategoriService]
})
export class NavComponent implements OnInit {
  
  constructor(private hesapServis:HesapService,private router:Router,private MutfakServis:MutfakService,private KategoriServis:KategoriService) { }

  Mutfaklar : Mutfak[] = []
  Kategoriler : Kategori[] = []
  
  ngOnInit(): void {
    this.MutfakServis.mutfaklariCek().subscribe(data => { this.Mutfaklar = data }); 
    this.KategoriServis.kategorileriCek().subscribe(data => {this.Kategoriler = data  }); 
  }
  giris(){
return this.hesapServis.girisYapildiMi()
  }
  cikis(){
    this.hesapServis.cikisYap()
    this.router.navigate(["tarifler"])
      }

}
