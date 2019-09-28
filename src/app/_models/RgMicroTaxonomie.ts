import { RgMicro } from './rg_micro'; 
import { Taxonomie } from './taxonomie';

export class RgMicroTaxonomie {
    rgMicro: RgMicro; 
    taxonomieC: Taxonomie; 

    public constructor(public rg: RgMicro, public taxonomie: Taxonomie) {
        //this.rgMarine = rgMarineC; 
        //this.institution = institutionC; 
        console.log("bonjour")
     }
}