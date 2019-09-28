import { RgForet } from './rg_foret'; 
import { Taxonomie } from './taxonomie';

export class RgForetTaxonomie {
    rgForet: RgForet; 
    taxonomieC: Taxonomie; 

    public constructor(public rg: RgForet, public taxonomie: Taxonomie) {
        //this.rgMarine = rgMarineC; 
        //this.institution = institutionC; 
        console.log("bonjour")
     }
}