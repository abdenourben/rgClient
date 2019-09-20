import { Institution } from './institution'; 
import { RgMarine } from './rg_marine'; 

export class RgInstitutionObject {
    rgMarine: RgMarine; 
    institutionC: Institution; 

    public constructor(public rg: RgMarine, public institution: Institution) {
        //this.rgMarine = rgMarineC; 
        //this.institution = institutionC; 
        console.log("bonjour")
     }
}