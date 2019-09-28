
export class rg_version{
    id: number;
    nomCommunFr: string;
    nomCommunAr: string;
    nomScientifique: string;
    description: string;
    morphologie: string;
    formuleChimique: string;
    structure: string;
    environnement: string;
    transmission: string;
    cycleVie: string;
    numVersion:number;

    public constructor
    (  id: number,
    nomCommunFr: string,
    nomCommunAr: string,
    nomScientifique: string,
    description: string,
    morphologie: string,
    formuleChimique: string,
    structure: string,
    environnement: string,
       numVersion: number,
       cycleVie: string,){
        this.id=id;
        this.nomCommunFr=nomCommunFr;
        this.nomCommunAr=nomCommunAr;
        this.nomScientifique=nomScientifique;
        this.description=description;
        this.morphologie=morphologie;
        this.formuleChimique=formuleChimique;
        this.structure=structure;
        this.environnement=environnement;
        this.numVersion=numVersion;
        this.cycleVie=cycleVie;




}

}
