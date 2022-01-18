import { Icerik } from "./icerik";

export class Tarif{
    id!: number;
    Adi!: string;
    ResimUrl!: string;
    Aciklama!: string;
    KategoriId!: number;
    MutfakId!: number;
    IcerikListesi!: Icerik[];

}