import { RgMarine } from './rg_marine'; 
import { Taxonomie } from './taxonomie';

export class RgTaxonomieObject {
    rgMarine: RgMarine; 
    taxonomieC: Taxonomie; 

    public constructor(public rg: RgMarine, public taxonomie: Taxonomie) {
        //this.rgMarine = rgMarineC; 
        //this.institution = institutionC; 
        console.log("bonjour")
     }
}