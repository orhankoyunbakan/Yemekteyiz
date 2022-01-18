import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../servisler/alertify.service';
import { TarifService } from '../servisler/tarif.service';
import { Tarif } from '../tarif/tarif';

@Component({
  selector: 'app-hikayeler',
  templateUrl: './hikayeler.component.html',
  styleUrls: ['./hikayeler.component.css'],
  providers:[TarifService]
})
export class HikayelerComponent implements OnInit {

  constructor(private AlertifyServisi: AlertifyService,
    private TarifServis: TarifService,
    private activatedRoute: ActivatedRoute) { }

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


  stringLength(x:string):string{
    x=x.substring(0,8);
    return x+"...";
  }
}
