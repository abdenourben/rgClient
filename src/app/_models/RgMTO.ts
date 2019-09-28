import { Institution } from './institution'; 
import { Taxonomie } from './taxonomie';
import { RgMicro } from './rg_micro';

export class RgMTO {
    rgMicro: RgMicro; 
    institutionC: Institution; 
    taxonomieC: Taxonomie; 

    public constructor(public rg: RgMicro, public institution: Institution, public taxonomie: Taxonomie) {
        //this.rgMarine = rgMarineC; 
        //this.institution = institutionC; 
        console.log("bonjour")
     }
}