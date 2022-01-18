import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarifComponent } from './tarif/tarif.component';
import { NavComponent } from './nav/nav.component';
import { MutfakComponent } from './mutfak/mutfak.component';
import { KategoriComponent } from './kategori/kategori.component';
import { TarifFiltrePipe } from './tarif/tarif-filtre.pipe';
import {HttpClientModule} from '@angular/common/http';
import { TarifEkleComponent } from './tarif/tarif-ekle/tarif-ekle.component';
import { TarifDetayComponent } from './tarif/tarif-detay/tarif-detay.component';
import { GirisComponent } from './giris/giris.component';
import { GirisGuard } from './giris/giris.guard';
import { KayitOlComponent } from './giris/kayit-ol/kayit-ol.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { HikayelerComponent } from './hikayeler/hikayeler.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TarifComponent,
    NavComponent,
    MutfakComponent,
    KategoriComponent,
    TarifFiltrePipe,
    TarifEkleComponent,
    TarifDetayComponent,
    GirisComponent,
    KayitOlComponent,
    AnasayfaComponent,
    HikayelerComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [GirisGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
