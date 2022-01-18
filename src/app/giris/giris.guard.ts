import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { HesapService } from "../servisler/hesap.service";

@Injectable()
export class GirisGuard implements CanActivate{
    constructor (private hesapServis:HesapService,private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        let girisYapildi=this.hesapServis.girisYapildiMi();
        if(girisYapildi){
            return true;
        }
        this.router.navigate(["giris-yap"])
        return false
    }
}