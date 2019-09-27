import { RgAlimentaire } from './rg_alimentaire'; 
import { Taxonomie } from './taxonomie';

export class RgAlimentaireTaxonomie {
    rgAlimentaire: RgAlimentaire; 
    taxonomieC: Taxonomie; 

    public constructor(public rg: RgAlimentaire, public taxonomie: Taxonomie) {
        //this.rgMarine = rgMarineC; 
        //this.institution = institutionC; 
        console.log("bonjour")
     }
}