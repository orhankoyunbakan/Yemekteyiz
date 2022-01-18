import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../servisler/alertify.service';
import { TarifService } from '../servisler/tarif.service';
import { Tarif } from './tarif';


@Component({
  selector: 'app-tarif',
  templateUrl: './tarif.component.html',
  styleUrls: ['./tarif.component.css'], 
  providers: [TarifService]
})
export class TarifComponent implements OnInit {

  constructor(private AlertifyServisi: AlertifyService,
    private TarifServis: TarifService,
    private activatedRoute: ActivatedRoute) { }

  Baslik = "Tarif Listesi"
  filtreYazi = undefined


  tarifler: Tarif[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["mutfakId"] !== undefined){
        this.TarifServis.tarifleriMutfakCek(params["mutfakId"]).subscribe(data => {
          this.tarifler = data 
        });
      }
      else{
        this.TarifServis.tarifleriCek(params["kategoriId"]).subscribe(data => {
          this.tarifler = data 
        }); 
      }
      
      
    });



  }
  addToChart(tarif: Tarif) {

    this.AlertifyServisi.success("Tarifi Eklendi " + tarif.id)
  }

}
