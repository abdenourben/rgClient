import { RgAnimale } from './rg_animale'; 
import { Taxonomie } from './taxonomie';

export class RgAnimaleTaxonomie {
    rgAnimale: RgAnimale; 
    taxonomieC: Taxonomie; 

    public constructor(public rg: RgAnimale, public taxonomie: Taxonomie) {
        //this.rgMarine = rgMarineC; 
        //this.institution = institutionC; 
        console.log("bonjour")
     }
}