import { Institution } from './institution'; 
import { Taxonomie } from './taxonomie';
import { RgAlimentaire } from './rg_alimentaire';

export class RgAO {
    rgAlimentaire: RgAlimentaire; 
    institutionC: Institution; 
    taxonomieC: Taxonomie; 

    public constructor(public rg: RgAlimentaire, public institution: Institution, public taxonomie: Taxonomie) {
        //this.rgMarine = rgMarineC; 
        //this.institution = institutionC; 
        console.log("bonjour")
     }
}