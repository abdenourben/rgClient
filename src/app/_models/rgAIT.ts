import { Institution } from './institution'; 
import { Taxonomie } from './taxonomie';
import { RgAnimale } from './rg_animale';

export class RgAIT {
    rgAnimale: RgAnimale; 
    institutionC: Institution; 
    taxonomieC: Taxonomie; 

    public constructor(public rg: RgAnimale, public institution: Institution, public taxonomie: Taxonomie) {
        //this.rgMarine = rgMarineC; 
        //this.institution = institutionC; 
        console.log("bonjour")
     }
}