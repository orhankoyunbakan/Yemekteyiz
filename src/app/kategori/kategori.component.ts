import { Component, OnInit } from '@angular/core';
import { KategoriService } from '../servisler/kategori.service';
import { Kategori } from './kategori';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css'],providers:[KategoriService]
})
export class KategoriComponent implements OnInit {
Baslik="Kategoriler"
constructor(private KategoriServis:KategoriService){}
  Kategoriler : Kategori[] = [
  ]
  ngOnInit(): void {
    this.KategoriServis.kategorileriCek().subscribe(data => {
      this.Kategoriler = data 
    }); 
  }

}
