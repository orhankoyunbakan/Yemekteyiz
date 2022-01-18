import { Component, OnInit } from '@angular/core';
import { MutfakService } from '../servisler/mutfak.service';
import { Mutfak } from './mutfak';

@Component({
  selector: 'app-mutfak',
  templateUrl: './mutfak.component.html',
  styleUrls: ['./mutfak.component.css'],providers:[MutfakService]
})
export class MutfakComponent implements OnInit {
  Baslik="Mutfaklar"
  constructor(private MutfakServis:MutfakService) { }
  Mutfaklar : Mutfak[] = []

  ngOnInit(): void {
    this.MutfakServis.mutfaklariCek().subscribe(data => {
      this.Mutfaklar = data 
    }); 
  }

}
