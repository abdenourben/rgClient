import { Institution } from './institution'; 
import { Taxonomie } from './taxonomie';
import { RgForet } from './rg_foret';

export class RgFIT {
    rgForet: RgForet; 
    institutionC: Institution; 
    taxonomieC: Taxonomie; 

    public constructor(public rg: RgForet, public institution: Institution, public taxonomie: Taxonomie) {
        //this.rgMarine = rgMarineC; 
        //this.institution = institutionC; 
        console.log("bonjour")
     }
}