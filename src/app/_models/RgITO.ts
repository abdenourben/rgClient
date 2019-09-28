import { Institution } from './institution'; 
import { RgMarine } from './rg_marine'; 
import { Taxonomie } from './taxonomie';

export class RgITO {
    rgMarine: RgMarine; 
    institutionC: Institution; 
    taxonomieC: Taxonomie; 

    public constructor(public rg: RgMarine, public institution: Institution, public taxonomie: Taxonomie) {
        //this.rgMarine = rgMarineC; 
        //this.institution = institutionC; 
        console.log("bonjour")
     }
}