import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { GirisComponent } from './giris/giris.component';
import { GirisGuard } from './giris/giris.guard';
import { KayitOlComponent } from './giris/kayit-ol/kayit-ol.component';
import { TarifDetayComponent } from './tarif/tarif-detay/tarif-detay.component';
import { TarifEkleComponent } from './tarif/tarif-ekle/tarif-ekle.component';
import { TarifComponent } from './tarif/tarif.component';

const routes: Routes = [
{ path: "anasayfa", component: AnasayfaComponent },
{ path: "", redirectTo: "anasayfa", pathMatch: "full" },
{ path: "tarifler/kategori/:kategoriId", component: TarifComponent },
{ path: "tarifler/mutfak/:mutfakId", component: TarifComponent },
{ path: "tarif-ekle", component: TarifEkleComponent,canActivate:[GirisGuard] },
{ path: "tarif-detay/:tarifId", component: TarifDetayComponent },
{ path: "giris-yap", component: GirisComponent },
{ path: "kayit-ol", component: KayitOlComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
