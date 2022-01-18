import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TarifService } from 'src/app/servisler/tarif.service';
import { Tarif } from '../tarif';

@Component({
  selector: 'app-tarif-detay',
  templateUrl: './tarif-detay.component.html',
  styleUrls: ['./tarif-detay.component.css'], 
  providers: [TarifService]
})
export class TarifDetayComponent implements OnInit {

  constructor(private TarifServis: TarifService,
    private activatedRoute: ActivatedRoute) { }
  tarif: Tarif = new Tarif()

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params["tarifId"])
      this.TarifServis.tekTarifCek(params["tarifId"]).subscribe(data => {
        this.tarif = data

      });
    });

  }

}
